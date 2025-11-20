import { supabase } from "../lib/supabaseClient";

export interface TranscriptWord {
  word: string;
  startTime: number;
  endTime: number;
}

export interface Episode {
  id: string;
  title: string;
  source: string | null;
  description: string | null;
  published_at: string | null;
  cover_url: string | null;
  audio_url: string | null;
  duration_seconds: number | null;
  waveform: number[] | null;
  transcript: TranscriptWord[] | null;
  created_at: string;
}

export async function fetchEpisodes() {
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data as Episode[];
}

export async function fetchEpisodeById(id: string) {
  const { data, error } = await supabase
    .from("episodes")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as Episode | null;
}
