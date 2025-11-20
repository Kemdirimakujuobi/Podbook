# Setup Checklist for Podbook

Use this checklist to get your Podbook app fully operational.

## ✅ Completed

- [x] Supabase project created
- [x] Environment variables configured (`.env`)
- [x] Supabase client initialized
- [x] Episodes table and TypeScript types defined
- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] Vite build configuration (outputs to `dist/`)
- [x] Admin upload interface created
- [x] Waveform generation utility

## 🔲 Next Steps

### 1. Set Up Supabase Storage (Required for uploads)

Follow [STORAGE_SETUP.md](./STORAGE_SETUP.md) to create:
- [ ] `podcast-audio` bucket
- [ ] `podcast-covers` bucket
- [ ] Storage policies for public read/authenticated upload

**Time:** 5 minutes

### 2. Configure Vercel Deployment

1. [ ] Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. [ ] Import your GitHub repository: `Kemdirimakujuobi/Podbook`
3. [ ] Configure build settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: **dist**
4. [ ] Add environment variables:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
5. [ ] Deploy!

**Time:** 5 minutes

### 3. Upload Your First Episode

1. [ ] Complete step 1 (Storage setup)
2. [ ] Navigate to `http://localhost:3000/#/admin` (local) or `https://your-app.vercel.app/#/admin` (production)
3. [ ] Fill in episode details
4. [ ] Upload audio file and cover image
5. [ ] Click "Upload Episode"

**Guide:** [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

**Time:** 2-5 minutes per episode

### 4. Test the Player

1. [ ] After uploading an episode, go to the home page
2. [ ] Verify the episode loads and displays correctly
3. [ ] Test audio playback
4. [ ] Check waveform visualization
5. [ ] Verify transcript highlighting (if provided)

### 5. Optional Enhancements

- [ ] Add authentication to protect `/admin` route
- [ ] Create episode list/management interface
- [ ] Add search/filter functionality
- [ ] Implement RSS feed integration
- [ ] Add analytics tracking
- [ ] Set up custom domain on Vercel

## Troubleshooting

### Build fails on Vercel
- Check that output directory is set to `dist`
- Verify all dependencies are in `package.json` (not devDependencies)
- Check build logs for specific errors

### Admin upload fails
- Verify storage buckets are created
- Check bucket policies allow uploads
- Ensure environment variables are set correctly
- Check browser console for detailed errors

### Episodes don't appear in player
- Verify episode was successfully created in Supabase
- Check that files uploaded to storage
- Look for errors in browser console
- Verify `fetchEpisodes()` function works

## Current Project Structure

```
Podcast Player Design/
├── src/
│   ├── components/
│   │   └── AdminUpload.tsx      # Admin upload form
│   ├── lib/
│   │   └── supabaseClient.ts    # Supabase client
│   ├── services/
│   │   ├── episodes.ts          # Episode fetching
│   │   └── upload.ts            # File upload & episode creation
│   ├── utils/
│   │   └── waveform.ts          # Waveform generation
│   ├── App.tsx                  # Main player UI
│   ├── Router.tsx               # Simple routing
│   └── main.tsx                 # App entry point
├── .env                         # Environment variables (not in git)
├── ADMIN_GUIDE.md              # Admin interface guide
├── STORAGE_SETUP.md            # Supabase storage setup
└── SETUP_CHECKLIST.md          # This file

```

## Quick Commands

```bash
# Development
npm run dev                 # Start dev server on port 3000

# Production build
npm run build              # Build to dist/

# Git operations
git status                 # Check changes
git add .                  # Stage all changes
git commit -m "message"    # Commit changes
git push origin main       # Push to GitHub
```

## Support

- Supabase Docs: https://supabase.com/docs
- Vite Docs: https://vitejs.dev/
- Vercel Docs: https://vercel.com/docs

---

**Current Status:** Ready for storage setup and first episode upload! 🎉
