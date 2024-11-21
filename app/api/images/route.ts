import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const photosDir = path.join(process.cwd(), 'public', 'photos')
  const files = fs.readdirSync(photosDir)

  const images = files.map((file) => {
    const name = path.basename(file, path.extname(file))
    return {
      name,
      src: `/photos/${file}`,
      alt: `Image ${name}`,
    }
  })

  return NextResponse.json(images)
}
