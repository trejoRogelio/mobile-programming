import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close, cameraReverse } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

interface Tab3Props  {
  deletePhoto: (photo: UserPhoto) => Promise<void>;
  photos: UserPhoto[];
  takePhoto: () => Promise<void>;
  replacePhoto: (index: number) => Promise<void>;
}

const Tab3: React.FC <Tab3Props> = ({ deletePhoto, photos, takePhoto, replacePhoto }) => {
  //const { replacePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [indexToUpdate, setIndexToUpdate] = useState<number>(0);

  const handleImageClick = (photo: UserPhoto, index: number) => {
    setPhotoToDelete(photo);
    setIndexToUpdate(index);
  };

  useEffect(() => {
    //window.location.reload();
  }, [photos]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Galería</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Galería</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => handleImageClick(photo, index)} src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }, {
            text: 'Update',
            icon: cameraReverse,
            handler: () => {
              if (photoToDelete) {
                replacePhoto(indexToUpdate);
              }
            }
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
