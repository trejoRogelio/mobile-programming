import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close, pencil } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
type Tab3Props = {
  photos: UserPhoto[];
  deletePhoto: (photo: UserPhoto) => void;
  takePhoto: (photo: UserPhoto) => Promise<void>;
};

const Tab1 = ({ photos, deletePhoto, takePhoto }: Tab3Props) => {
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
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
          },{
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />


      </IonContent>
    </IonPage>
  );
};

export default Tab1;