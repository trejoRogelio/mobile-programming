import React, { useState } from 'react';
import { IonContent, IonPage, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import PhotoList from '../components/PhotoList';
import AddPhotoForm from '../components/AddPhotoForm';

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'photo1.jpg' },
    { id: 2, url: 'photo2.jpg' },
    // ... otras fotos
  ]);

  const handleDelete = (id: number) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
  };

  const handleAddPhoto = (url: string) => {
    const newPhoto = { id: photos.length + 1, url };
    setPhotos([...photos, newPhoto]);
  };

  return (
    <IonPage>
      <IonContent>
        <PhotoList photos={photos} onDelete={handleDelete} onAddPhoto={handleAddPhoto} />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Photos;
