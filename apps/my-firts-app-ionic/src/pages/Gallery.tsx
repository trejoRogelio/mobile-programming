import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButton } from '@ionic/react';

const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<{ url: string, id: string }[]>([
  ]);

  const deletePhoto = (photoId: string) => {
    setPhotos(photos.filter(photo => photo.id !== photoId));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center text-xl font-semibold">Galería</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <IonImg src={photo.url} />
              <div className="px-6 py-4">
                <IonButton className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deletePhoto(photo.id)}>
                  Eliminar
                </IonButton>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
