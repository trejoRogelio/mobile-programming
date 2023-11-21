// GalleryPage.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { trash, close } from 'ionicons/icons';
import RefreshButton from '../components/RefreshButton';

const GalleryPage: React.FC = () => {
  const { photos, deletePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto | null>(null);

  const handleDeleteClick = (photo: UserPhoto) => {
    setPhotoToDelete(photo);
  };

  const handleDeleteConfirmed = () => {
    if (photoToDelete) {
      deletePhoto(photoToDelete);
      setPhotoToDelete(null);
    }
  };

  const handleDeleteCancelled = () => {
    setPhotoToDelete(null);
  };

  const handleRefresh = () => {
    // Implementa la lógica de actualización aquí
    // Puedes, por ejemplo, recargar la página o actualizar la lista de fotos
    console.log('Refreshing...');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => handleDeleteClick(photo)}
                  src={photo.webviewPath}
                  style={{ cursor: 'pointer', marginBottom: '10px', borderRadius: '8px' }}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Botón flotante para eliminar fotos */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => handleDeleteClick(photos[0])} style={{ background: '#ff6347' }}>
            <IonIcon icon={trash} />
          </IonFabButton>
        </IonFab>

        {/* Hoja de acciones para eliminar fotos */}
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: handleDeleteConfirmed,
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: handleDeleteCancelled,
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(null)}
        />

        {/* Componente RefreshButton */}
        <RefreshButton onClick={handleRefresh} />
      </IonContent>
    </IonPage>
  );
};

export default GalleryPage;
