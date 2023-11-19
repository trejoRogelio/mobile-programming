import React from 'react';
import { IonModal, IonContent, IonButton } from '@ionic/react';
import Slideshow from './Slideshow';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface SlideshowModalProps {
  photos: UserPhoto[];
  onClose: () => void;
}

const SlideshowModal: React.FC<SlideshowModalProps> = ({ photos, onClose }) => {
  return (
    <IonModal isOpen={true} onDidDismiss={onClose}>
      <IonContent>
        <Slideshow photos={photos} onClose={onClose} />
        <IonButton onClick={onClose} color="medium" expand="full">
          Close Slideshow
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default SlideshowModal;
