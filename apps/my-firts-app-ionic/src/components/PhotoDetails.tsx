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

interface PhotoDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  photoDetails?: {
    date: string;
    location?: string;
    comments?: string[];
  };
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ isOpen, onClose, photoDetails }) => {
  if (!photoDetails) {

    onClose();
    return null;
  }

  const { date, location, comments } = photoDetails;

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles de la Foto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <p>Fecha: {date}</p>
              {location && <p>Ubicación: {location}</p>}
              {comments && (
                <div>
                  <p>Comentarios:</p>
                  <ul>
                    {comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton onClick={onClose} color="light" expand="full">
                <IonIcon icon={close} slot="start" />
                Cerrar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default PhotoDetails;
