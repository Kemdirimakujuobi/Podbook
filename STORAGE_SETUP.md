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

**IMPORTANT:** You need to apply policies to EACH bucket separately. Apply these policies twice - once for `podcast-audio` and once for `podcast-covers`.

### For `podcast-audio` Bucket

Go to Storage → `podcast-audio` → Policies → New Policy

**1. Public Read Policy**
```sql
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'podcast-audio');
```

**2. Authenticated Upload Policy**
```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'podcast-audio');
```

**3. Authenticated Delete Policy (optional)**
```sql
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'podcast-audio');
```

### For `podcast-covers` Bucket

Go to Storage → `podcast-covers` → Policies → New Policy

**1. Public Read Policy**
```sql
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'podcast-covers');
```

**2. Authenticated Upload Policy**
```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'podcast-covers');
```

**3. Authenticated Delete Policy (optional)**
```sql
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
USING (bucket_id = 'podcast-covers');
```

## Verification

After setup, verify everything is configured correctly:

1. Go to Storage in Supabase Dashboard
2. You should see `podcast-audio` and `podcast-covers` listed
3. Both should show as "Public"
4. Click on each bucket and go to Policies tab
5. Each bucket should have 3 policies (or 2 if you skipped delete):
   - ✓ Public read access
   - ✓ Authenticated users can upload
   - ✓ Authenticated users can delete (optional)

**If `podcast-covers` has no policies**, go back and apply the policies specifically to that bucket following the instructions above.

Once complete, you can use the admin upload interface at `/#/admin` in your app.
