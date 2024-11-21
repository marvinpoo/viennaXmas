'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/images')
      const data = await res.json()
      setImages(data)
    }
    fetchImages()
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1 cursor-pointer">
            <Image
              src={`/thumbnails/${image.name}-medium.webp`}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onClick={() => setSelectedImage(index)}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <Lightbox
          images={images}
          selectedIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}
