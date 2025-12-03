import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(4);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Responsive carousel settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerScreen(1);
      else if (window.innerWidth < 1024) setItemsPerScreen(2);
      else setItemsPerScreen(4);
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clamp current index when screen size changes to prevent empty space
  useEffect(() => {
    const maxIndex = Math.max(0, GALLERY_IMAGES.length - itemsPerScreen);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerScreen, currentIndex]);

  const maxIndex = Math.max(0, GALLERY_IMAGES.length - itemsPerScreen);

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // Lightbox Navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextLightboxImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const prevLightboxImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextLightboxImage, prevLightboxImage]);

  return (
    <section className="py-24 bg-white select-none">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Life at SMNA</h2>
          <p className="text-slate-600">A glimpse into our vibrant team and culture.</p>
        </div>
        
        <div className="relative group/carousel">
          {/* Carousel Viewport */}
          <div className="overflow-hidden -mx-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerScreen)}%)` }}
            >
              {GALLERY_IMAGES.map((img, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerScreen}%` }}
                >
                  <div 
                    className="aspect-[4/3] rounded-lg overflow-hidden relative cursor-pointer group shadow-md"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-8 h-8 drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 bg-white p-3 rounded-full shadow-lg text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:scale-110 disabled:opacity-0 disabled:cursor-not-allowed`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 bg-white p-3 rounded-full shadow-lg text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:scale-110 disabled:opacity-0 disabled:cursor-not-allowed`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Navigation */}
          <button 
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hidden md:block"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-screen w-full flex flex-col items-center">
             <img 
               src={GALLERY_IMAGES[lightboxIndex]} 
               alt={`Full screen ${lightboxIndex + 1}`} 
               className="max-h-[85vh] max-w-full object-contain rounded shadow-2xl animate-in zoom-in-95 duration-300"
               onClick={(e) => e.stopPropagation()}
             />
             <p className="mt-4 text-white/60 text-sm tracking-wider">
               {lightboxIndex + 1} / {GALLERY_IMAGES.length}
             </p>
          </div>

          {/* Right Navigation */}
          <button 
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hidden md:block"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};