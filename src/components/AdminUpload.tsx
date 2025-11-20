import { useState } from "react";
import { createEpisode, getAudioDuration } from "../services/upload";
import { generateWaveform, generateMockWaveform } from "../utils/waveform";
import { TranscriptWord } from "../services/episodes";

export function AdminUpload() {
  const [formData, setFormData] = useState({
    title: "",
    source: "",
    description: "",
    published_at: new Date().toISOString().split("T")[0],
  });

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [transcriptText, setTranscriptText] = useState("");
  const [useMockWaveform, setUseMockWaveform] = useState(false);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setUploading(true);

    try {
      // Validation
      if (!audioFile) {
        throw new Error("Please select an audio file");
      }
      if (!coverFile) {
        throw new Error("Please select a cover image");
      }
      if (!formData.title || !formData.source) {
        throw new Error("Please fill in all required fields");
      }

      // Get audio duration
      setProgress("Analyzing audio file...");
      const duration = await getAudioDuration(audioFile);

      // Generate waveform
      setProgress("Generating waveform...");
      const waveform = useMockWaveform
        ? generateMockWaveform()
        : await generateWaveform(audioFile);

      // Parse transcript
      let transcript: TranscriptWord[] = [];
      if (transcriptText.trim()) {
        try {
          transcript = JSON.parse(transcriptText);
          // Validate transcript structure
          if (!Array.isArray(transcript)) {
            throw new Error("Transcript must be an array");
          }
        } catch (err) {
          throw new Error("Invalid transcript JSON format");
        }
      }

      // Upload everything
      setProgress("Uploading files...");
      const episodeId = await createEpisode({
        ...formData,
        audioFile,
        coverFile,
        duration_seconds: Math.floor(duration),
        waveform,
        transcript,
      });

      setSuccess(`Episode uploaded successfully! ID: ${episodeId}`);
      setProgress("");

      // Reset form
      setFormData({
        title: "",
        source: "",
        description: "",
        published_at: new Date().toISOString().split("T")[0],
      });
      setAudioFile(null);
      setCoverFile(null);
      setTranscriptText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
      setProgress("");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Upload New Episode
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Episode title"
              />
            </div>

            {/* Source */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source *
              </label>
              <input
                type="text"
                required
                value={formData.source}
                onChange={(e) =>
                  setFormData({ ...formData, source: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Offrange"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Episode description"
              />
            </div>

            {/* Published Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published Date
              </label>
              <input
                type="date"
                value={formData.published_at}
                onChange={(e) =>
                  setFormData({ ...formData, published_at: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Audio File */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Audio File * (MP3, WAV, etc.)
              </label>
              <input
                type="file"
                accept="audio/*"
                required
                onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {audioFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {audioFile.name} (
                  {(audioFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image * (JPG, PNG)
              </label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {coverFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {coverFile.name}
                </p>
              )}
            </div>

            {/* Waveform Option */}
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={useMockWaveform}
                  onChange={(e) => setUseMockWaveform(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Use mock waveform (faster, random data)
                </span>
              </label>
            </div>

            {/* Transcript */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transcript (JSON format, optional)
              </label>
              <textarea
                value={transcriptText}
                onChange={(e) => setTranscriptText(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                placeholder='[{"word": "Hello", "startTime": 0, "endTime": 0.5}]'
              />
              <p className="mt-2 text-xs text-gray-500">
                Format: Array of objects with word, startTime, and endTime
              </p>
            </div>

            {/* Progress */}
            {progress && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <p className="text-blue-800 text-sm">{progress}</p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <p className="text-green-800 text-sm">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {uploading ? "Uploading..." : "Upload Episode"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
