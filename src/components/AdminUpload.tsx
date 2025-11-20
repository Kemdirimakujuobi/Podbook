import { useState } from "react";
import { createEpisode, getAudioDuration, testStorageAccess } from "../services/upload";
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
  const [testing, setTesting] = useState(false);

  const handleTestStorage = async () => {
    setTesting(true);
    setError("");
    setSuccess("");

    try {
      const result = await testStorageAccess();

      if (result.audioAccess && result.coverAccess) {
        setSuccess("✓ Storage buckets are accessible and configured correctly!");
      } else {
        setError(`Storage test failed:\n${result.errors.join("\n")}`);
      }
    } catch (err) {
      setError(`Storage test error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setTesting(false);
    }
  };

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
      let transcript: any = null;
      if (transcriptText.trim()) {
        try {
          transcript = JSON.parse(transcriptText);
          // Accept both array format (word-level) and object format (paragraph-level)
          // The normalizeTranscript function will handle conversion
          if (!transcript || (typeof transcript !== 'object')) {
            throw new Error("Invalid transcript format");
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "30px", fontWeight: "bold", margin: 0 }}>
              Upload New Episode
            </h1>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                onClick={handleTestStorage}
                disabled={testing}
                style={{
                  backgroundColor: testing ? "#9CA3AF" : "#10B981",
                  color: "white",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "500",
                  cursor: testing ? "not-allowed" : "pointer",
                  fontSize: "16px"
                }}
              >
                {testing ? "Testing..." : "Test Storage"}
              </button>
              <button
                type="submit"
                form="upload-form"
                disabled={uploading}
                style={{
                  backgroundColor: uploading ? "#9CA3AF" : "#2563EB",
                  color: "white",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "500",
                  cursor: uploading ? "not-allowed" : "pointer",
                  fontSize: "16px"
                }}
              >
                {uploading ? "Uploading..." : "Upload Episode"}
              </button>
            </div>
          </div>

          <form id="upload-form" onSubmit={handleSubmit} className="space-y-6">
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
                Word-level: [&#123;"word": "Hello", "startTime": 0, "endTime": 0.5&#125;] or Paragraph-level: &#123;"blocks": [&#123;"type": "paragraph", "timestamp": "00:00:00", "text": "..."&#125;]&#125;
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
            <div className="sticky bottom-0 bg-white pt-4 pb-4 -mx-8 px-8 border-t border-gray-200">
              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
              >
                {uploading ? "Uploading..." : "Upload Episode"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
