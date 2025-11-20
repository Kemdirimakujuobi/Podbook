# Supabase Storage Setup

Before using the admin upload interface, you need to create two storage buckets in your Supabase dashboard.

## Steps to Create Storage Buckets

1. Go to your Supabase project: https://supabase.com/dashboard/project/YOUR_PROJECT_ID

2. Navigate to **Storage** in the left sidebar

3. Create two public buckets:

### Bucket 1: `podcast-audio`
- **Name**: `podcast-audio`
- **Public**: Yes (enable public access)
- **File size limit**: 500 MB (or whatever you need)
- **Allowed MIME types**: `audio/*`

### Bucket 2: `podcast-covers`
- **Name**: `podcast-covers`
- **Public**: Yes (enable public access)
- **File size limit**: 10 MB
- **Allowed MIME types**: `image/*`

## Bucket Policies

For each bucket, set the following policies (Storage → Policies):

### Public Read Policy
```sql
-- Allow public read access
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'podcast-audio' OR bucket_id = 'podcast-covers');
```

### Authenticated Upload Policy
```sql
-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'podcast-audio' OR bucket_id = 'podcast-covers');
```

### Authenticated Delete Policy (optional)
```sql
-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'podcast-audio' OR bucket_id = 'podcast-covers');
```

## Verification

After setup, verify the buckets exist:
1. Go to Storage in Supabase Dashboard
2. You should see `podcast-audio` and `podcast-covers` listed
3. Both should show as "Public"

Once complete, you can use the admin upload interface at `/admin` in your app.
