import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import { camera, trash, close, create } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import PhotoGallery from '../components/PhotoGallery';
import ActionsWindow from '../components/ActionsWindow';

const Tab2: React.FC = () => {
  const { deletePhoto, editPhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [photoToEdit, setPhotoToEdit] = useState<UserPhoto>();



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
        <PhotoGallery photos={photos} onPhotoClick={(photo) => { setPhotoToDelete(photo); setPhotoToEdit(photo); }} />

        <ActionsWindow
          isOpen={!!photoToDelete || !!photoToEdit}
          onDelete={async () => { if (photoToDelete) { deletePhoto(photoToDelete); setPhotoToDelete(undefined); } setPhotoToEdit(undefined); }}
          onEdit={async () => { if (photoToEdit) { editPhoto(photoToEdit); setPhotoToEdit(undefined); } setPhotoToDelete(undefined); }}
          onCancel={() => { setPhotoToDelete(undefined); setPhotoToEdit(undefined); }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
