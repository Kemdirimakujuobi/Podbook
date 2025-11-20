import { supabase } from "../lib/supabaseClient";
import { TranscriptWord } from "./episodes";

export interface UploadEpisodeData {
  title: string;
  source: string;
  description: string;
  published_at: string;
  audioFile: File;
  coverFile: File;
  duration_seconds: number;
  waveform: number[];
  transcript: TranscriptWord[];
}

/**
 * Upload a file to Supabase Storage
 */
export async function uploadFile(
  bucket: "podcast-audio" | "podcast-covers",
  file: File,
  path?: string
): Promise<string> {
  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const filePath = path || `${timestamp}-${sanitizedName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(data.path);

  return publicUrl;
}

/**
 * Create a new episode in the database
 */
export async function createEpisode(data: UploadEpisodeData): Promise<string> {
  // Upload audio file
  const audioUrl = await uploadFile("podcast-audio", data.audioFile);

  // Upload cover image
  const coverUrl = await uploadFile("podcast-covers", data.coverFile);

  // Insert episode record
  const { data: episode, error } = await supabase
    .from("episodes")
    .insert({
      title: data.title,
      source: data.source,
      description: data.description,
      published_at: data.published_at,
      audio_url: audioUrl,
      cover_url: coverUrl,
      duration_seconds: data.duration_seconds,
      waveform: data.waveform,
      transcript: data.transcript,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create episode: ${error.message}`);
  }

  return episode.id;
}

/**
 * Delete an episode and its associated files
 */
export async function deleteEpisode(episodeId: string): Promise<void> {
  // Get episode data first to know which files to delete
  const { data: episode, error: fetchError } = await supabase
    .from("episodes")
    .select("audio_url, cover_url")
    .eq("id", episodeId)
    .single();

  if (fetchError) {
    throw new Error(`Failed to fetch episode: ${fetchError.message}`);
  }

  // Extract file paths from URLs
  const audioPath = episode.audio_url?.split("/").pop();
  const coverPath = episode.cover_url?.split("/").pop();

  // Delete files from storage
  if (audioPath) {
    await supabase.storage.from("podcast-audio").remove([audioPath]);
  }
  if (coverPath) {
    await supabase.storage.from("podcast-covers").remove([coverPath]);
  }

  // Delete episode record
  const { error: deleteError } = await supabase
    .from("episodes")
    .delete()
    .eq("id", episodeId);

  if (deleteError) {
    throw new Error(`Failed to delete episode: ${deleteError.message}`);
  }
}

/**
 * Get audio duration in seconds
 */
export function getAudioDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.addEventListener("loadedmetadata", () => {
      resolve(audio.duration);
    });
    audio.addEventListener("error", () => {
      reject(new Error("Failed to load audio file"));
    });
    audio.src = URL.createObjectURL(file);
  });
}
