'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryProps {
  data: {
    title: string
    description: string
    images: Array<{
      src: string
      alt: string
      caption: string
    }>
  }
}

export default function Gallery({ data }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % data.images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + data.images.length) % data.images.length)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {data.images.map((image, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-md active:shadow-xl transition-all duration-200 active:scale-95 touch-target"
            >
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="text-center p-2 sm:p-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">🏗️</div>
                  <p className="text-xs sm:text-sm text-gray-600">{image.alt}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 active:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                <p className="text-white opacity-0 active:opacity-100 transition-opacity font-semibold text-center px-2 sm:px-4 text-xs sm:text-sm">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white active:text-gray-300 z-10 bg-black bg-opacity-70 rounded-full p-2 sm:p-3 touch-target"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white active:text-gray-300 z-10 bg-black bg-opacity-70 rounded-full p-2 sm:p-3 touch-target"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white active:text-gray-300 z-10 bg-black bg-opacity-70 rounded-full p-2 sm:p-3 touch-target"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-lg p-3 sm:p-4"
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center mb-3 sm:mb-4 rounded">
                  <div className="text-center text-white px-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">🏗️</div>
                    <p className="text-base sm:text-lg md:text-xl">{data.images[selectedImage].caption}</p>
                  </div>
                </div>
                <p className="text-white text-center text-sm sm:text-base">
                  {selectedImage + 1} / {data.images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
