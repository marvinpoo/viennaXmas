'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/data/images.json')
      const data = await res.json()
      setImages(data)
    }
    fetchImages()
  }, [])

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-48 cursor-pointer">
            <Image
              src={`/thumbnails/${image.name}-medium.webp`}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
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
