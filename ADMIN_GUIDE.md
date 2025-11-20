# Admin Upload Guide

This guide explains how to upload podcast episodes to your Podbook app.

## Prerequisites

Before uploading episodes, you **must** set up Supabase Storage buckets. Follow the instructions in [STORAGE_SETUP.md](./STORAGE_SETUP.md) first.

## Accessing the Admin Interface

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the admin page:
   - Local: `http://localhost:3000/#/admin`
   - Production: `https://your-domain.vercel.app/#/admin`

## Uploading an Episode

### Required Fields

1. **Title** - The episode title (e.g., "Where Soil is Holy, and Climate Change Is Seldom Mentioned")
2. **Source** - The podcast/show name (e.g., "Offrange")
3. **Audio File** - The podcast audio (MP3, WAV, etc.)
4. **Cover Image** - Episode artwork (JPG, PNG, etc.)

### Optional Fields

5. **Description** - Episode description or summary
6. **Published Date** - When the episode was published (defaults to today)
7. **Transcript** - Word-level transcript with timestamps (JSON format)

### Waveform Generation

The system can automatically generate waveform visualization from your audio:

- **Unchecked (default)**: Analyzes the actual audio file to create accurate waveform data
  - Takes a few seconds to process
  - Provides realistic visualization

- **Checked (mock waveform)**: Generates random waveform data
  - Instant processing
  - Useful for testing
  - Replace with real data later if needed

### Transcript Format

If you have a transcript, provide it as a JSON array with this structure:

```json
[
  {
    "word": "Discover",
    "startTime": 0,
    "endTime": 0.4
  },
  {
    "word": "the",
    "startTime": 0.4,
    "endTime": 0.5
  }
]
```

**Fields:**
- `word` - The spoken word
- `startTime` - When the word starts (in seconds)
- `endTime` - When the word ends (in seconds)

You can generate transcripts using services like:
- [AssemblyAI](https://www.assemblyai.com/)
- [Deepgram](https://deepgram.com/)
- [Whisper API](https://openai.com/research/whisper)

## Upload Process

1. Fill in all required fields
2. Select your audio and cover image files
3. (Optional) Add transcript JSON
4. Click "Upload Episode"
5. Wait for the process to complete:
   - Analyzing audio file...
   - Generating waveform...
   - Uploading files...
   - Success!

## After Upload

Once uploaded, your episode will be:
- Stored in Supabase database
- Audio and cover files saved to Supabase Storage
- Available immediately in the main player interface
- Accessible via the Supabase API

## Troubleshooting

### "Missing Supabase environment variables"
- Check that your `.env` file exists with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Restart your dev server after adding environment variables

### "Failed to upload file"
- Verify your storage buckets are created (see [STORAGE_SETUP.md](./STORAGE_SETUP.md))
- Check bucket policies allow public read and authenticated upload
- Ensure file sizes are within limits

### "Invalid transcript JSON format"
- Validate your JSON using [jsonlint.com](https://jsonlint.com/)
- Ensure it's an array of objects with `word`, `startTime`, and `endTime` fields

### Files upload but episode not created
- Check Supabase logs for database errors
- Verify your `episodes` table schema matches the Episode interface
- Check browser console for detailed error messages

## Managing Episodes

To delete or edit episodes:
1. Go to your Supabase dashboard
2. Navigate to Table Editor → `episodes`
3. Find the episode and edit/delete as needed
4. Remember to manually delete associated files from Storage if deleting

## Next Steps

- Set up authentication to protect the admin interface
- Add episode listing and management UI
- Implement batch upload functionality
- Add validation for file types and sizes
