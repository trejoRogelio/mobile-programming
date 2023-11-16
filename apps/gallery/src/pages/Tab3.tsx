import {
  IonActionSheet,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab3.css';
import { NotFoundPage } from '../components/NotFoundPage';
import { trash, close, pencil } from 'ionicons/icons';
import { useState } from 'react';
import { UserPhoto } from '../types';

type Tab3Props = {
  photos: UserPhoto[];
  loadingPh: boolean;
  deletePhoto: (photo: UserPhoto) => void;
  takePhoto: (photo: UserPhoto) => Promise<void>;
};

const Tab3 = ({ photos, loadingPh, deletePhoto, takePhoto }: Tab3Props) => {
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galería</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loadingPh ? (
          <IonLoading
            message='Dismissing after 3 seconds...'
            spinner={'bubbles'}
            animated
          />
        ) : photos.length <= 0 ? (
          <NotFoundPage text='No hay Fotos :(' />
        ) : (
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol
                  size='6'
                  key={photo.filepath}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #50a8ff',
                  }}>
                  <IonImg
                    onClick={() => setPhotoToDelete(photo)}
                    src={photo.webviewPath}
                  />
                  <p>Id: {photo.id}</p>
                </IonCol>
              ))}
              <IonActionSheet
                isOpen={!!photoToDelete}
                buttons={[
                  {
                    text: 'Delete',
                    role: 'destructive',
                    icon: trash,
                    handler: () => {
                      if (photoToDelete) {
                        deletePhoto(photoToDelete);
                        setPhotoToDelete(undefined);
                      }
                    },
                  },
                  {
                    text: 'Edit',
                    role: 'update',
                    icon: pencil,
                    handler: () => {
                      if (photoToDelete) {
                        takePhoto(photoToDelete);
                        setPhotoToDelete(undefined);
                      }
                    },
                  },
                  {
                    text: 'Cancel',
                    icon: close,
                    role: 'cancel',
                  },
                ]}
                onDidDismiss={() => setPhotoToDelete(undefined)}
              />
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
