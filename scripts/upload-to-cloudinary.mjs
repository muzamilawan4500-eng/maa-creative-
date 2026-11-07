import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

// Read .env.local if present
const envPath = path.join(projectRoot, '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (match) {
      const key = match[1]
      let value = match[2] || ''
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
      if (!process.env[key]) process.env[key] = value
    }
  })
}

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

if (!cloudName || !apiKey || !apiSecret) {
  console.error('\n[Cloudinary Setup Error]: Missing credentials.')
  console.error('Please add the following to your .env.local file:')
  console.error('CLOUDINARY_CLOUD_NAME=your_cloud_name')
  console.error('CLOUDINARY_API_KEY=your_api_key')
  console.error('CLOUDINARY_API_SECRET=your_api_secret\n')
  process.exit(1)
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
})

const videosDir = path.join(projectRoot, 'public', 'videos')
const backupDir = 'C:\\Users\\Awan\\maa-creative-videos-backup'

async function uploadVideos() {
  const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'))
  console.log(`Found ${files.length} video(s) to migrate to Cloudinary...`)

  const results = {}

  for (const file of files) {
    const filePath = path.join(videosDir, file)
    const publicId = `maa-creative/${path.parse(file).name}`
    console.log(`Uploading ${file} -> Cloudinary (${publicId})...`)

    try {
      const res = await cloudinary.uploader.upload_large(filePath, {
        resource_type: 'video',
        public_id: publicId,
        overwrite: true,
      })
      console.log(`  ✓ Uploaded successfully!`)
      console.log(`  URL: ${res.secure_url}`)
      results[file] = {
        secure_url: res.secure_url,
        thumbnail_url: res.secure_url.replace(/\.[^/.]+$/, '.jpg'),
        public_id: res.public_id,
        duration: res.duration,
      }
    } catch (err) {
      console.error(`  ✕ Error uploading ${file}:`, err.message)
    }
  }

  // Save mapping file for the app
  const outPath = path.join(projectRoot, 'src', 'data', 'cloudinary-videos.json')
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2))
  console.log(`\nMapping saved to ${outPath}`)
}

uploadVideos()
