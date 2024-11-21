import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const photosDir = path.join(process.cwd(), 'public', 'photos')
const thumbnailsDir = path.join(process.cwd(), 'public', 'thumbnails')

// Ensure thumbnails directory exists
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir)
}

const generateThumbnail = async (file) => {
  const filename = path.basename(file)
  const ext = path.extname(filename)
  const name = path.basename(filename, ext)

  const sizes = [
    { width: 320, height: 320, suffix: 'small' },
    { width: 640, height: 640, suffix: 'medium' },
    { width: 1024, height: 1024, suffix: 'large' }
  ]

  for (const size of sizes) {
    const thumbnailFilename = `${name}-${size.suffix}${ext}`
    const thumbnailPath = path.join(thumbnailsDir, thumbnailFilename)

    await sharp(file)
      .resize(size.width, size.height, { fit: 'cover' })
      .toFormat('webp')
      .toFile(thumbnailPath.replace(ext, '.webp'))

    // Generate JPEG fallback
    await sharp(file)
      .resize(size.width, size.height, { fit: 'cover' })
      .toFormat('jpeg')
      .toFile(thumbnailPath.replace(ext, '.jpg'))
  }

  console.log(`Generated thumbnails for ${filename}`)
}

const processAllImages = async () => {
  const files = fs.readdirSync(photosDir)
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
      await generateThumbnail(path.join(photosDir, file))
    }
  }
}

processAllImages()
