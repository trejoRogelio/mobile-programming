// RandomImage.tsx
import React, { useState } from 'react';
import { IonImg } from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import '../theme/RandomImage.css';

import RandomButton from './RandomButton';
import GalleryModal from './GalleryModal';

const RandomImage: React.FC = () => {
  const { randomPhoto } = usePhotoGallery();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="random-image-container">
      {randomPhoto ? (
        <>
          <IonImg onClick={openModal} src={randomPhoto.webviewPath} />
          <RandomButton />
          <GalleryModal isOpen={modalOpen} onClose={closeModal} photoUrl={randomPhoto.webviewPath} />
        </>
      ) : (
        <div>No hay fotos disponibles.</div>
      )}
    </div>
  );
};

export default RandomImage;
