import React from 'react';
import { IonModal, IonButton, IonIcon, IonImg } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

interface GalleryModalProps {
  photoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ photoUrl, isOpen, onClose }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonButton onClick={onClose} fill="clear" slot="start">
        <IonIcon icon={arrowBackOutline} />
      </IonButton>
      <IonImg src={photoUrl} />
    </IonModal>
  );
};

export default GalleryModal;