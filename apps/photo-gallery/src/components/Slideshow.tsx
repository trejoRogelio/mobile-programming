<<<<<<< Updated upstream
=======
// Slideshow.tsx
>>>>>>> Stashed changes
import React, { useState, useEffect } from 'react';
import { IonImg } from '@ionic/react';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface SlideshowProps {
  photos: UserPhoto[];
  onClose: () => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ photos, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <IonImg
        src={photos[currentSlide].webviewPath}
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        onClick={onClose}
      />
      <div style={{ position: 'absolute', top: '50%', left: '5%', cursor: 'pointer' }} onClick={handlePrevSlide}>
        {'<'}
      </div>
      <div style={{ position: 'absolute', top: '50%', right: '5%', cursor: 'pointer' }} onClick={handleNextSlide}>
        {'>'}
      </div>
    </div>
  );
};

export default Slideshow;
