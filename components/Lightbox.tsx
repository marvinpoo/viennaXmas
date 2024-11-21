import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ images, selectedIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious()
      } else if (event.key === 'ArrowRight') {
        handleNext()
      } else if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={handlePrevious}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
      <div className="relative w-full h-full max-w-4xl max-h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="contain"
          sizes="100vw"
        />
      </div>
    </div>
  )
}
