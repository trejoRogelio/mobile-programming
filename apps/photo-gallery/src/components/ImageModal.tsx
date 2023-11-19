<<<<<<< Updated upstream
=======
// ImageModal.tsx
>>>>>>> Stashed changes
import React from 'react';
import { IonModal, IonContent, IonImg, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { close, create, trash, arrowForward, arrowBack } from 'ionicons/icons';
import { UserPhoto } from '../hooks/usePhotoGallery';

interface ImageModalProps {
  photos: UserPhoto[];
  currentPhoto: UserPhoto;
  onClose: () => void;
  onUpdate: () => void;
  onDelete: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  photos,
  currentPhoto,
  onClose,
  onUpdate,
  onDelete,
  onNext,
  onPrevious,
}) => {
  const currentIndex = photos.findIndex((photo) => photo.filepath === currentPhoto.filepath);

  return (
    <IonModal isOpen={true} onDidDismiss={onClose}>
      <IonContent>
        <IonImg src={currentPhoto.webviewPath} />

        <IonLabel>
          Nombre de la foto: {currentPhoto.filepath}
        </IonLabel>

        <div style={{ marginTop: '10px' }}>
          <IonButton onClick={onPrevious} disabled={currentIndex === 0}>
            <IonIcon icon={arrowBack} />
            &nbsp; Previous
          </IonButton>

          <IonButton onClick={onNext} disabled={currentIndex === photos.length - 1}>
            <IonIcon icon={arrowForward} />
            &nbsp; Next
          </IonButton>

          <IonButton onClick={onUpdate}>
            <IonIcon icon={create} />
            &nbsp; Update
          </IonButton>

          <IonButton onClick={onDelete} color="danger" style={{ marginLeft: '10px' }}>
            <IonIcon icon={trash} />
            &nbsp; Delete
          </IonButton>

          <IonButton onClick={onClose} color="medium" style={{ marginLeft: '10px' }}>
            <IonIcon icon={close} />
            &nbsp; Cancel
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ImageModal;
