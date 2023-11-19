import React from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { close } from 'ionicons/icons';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl?: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose, photoUrl }) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Viewer Section</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <img src={photoUrl} alt="Selected" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton onClick={onClose} color="light" expand="full">
                <IonIcon icon={close} slot="start" />
                Close
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default PhotoModal;
