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
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer hover:opacity-80 transition duration-200">
            <Image
              src={`/thumbnails/${image.name}-medium.webp`}
              alt={image.alt}
              width={200}
              height={150}
              onClick={() => setSelectedImage(index)}
              className="rounded-lg object-cover w-full h-auto border border-gray-200 shadow-sm"
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
