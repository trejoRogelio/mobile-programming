// PhotoGalleryApp.tsx
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Photos from '../pages/Photos';
import Camera from '../pages/Camera';
import CameraButton from '../components/CameraButton';
import AddPhotoForm from '../components/AddPhotoForm';

const PhotoGalleryApp: React.FC = () => {
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
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menú</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem routerLink="/photos">
                  <IonLabel>Fotos</IonLabel>
                </IonItem>
                <IonItem routerLink="/camera">
                  <IonLabel>Cámara</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/photos" render={() => <Photos photos={photos} onDelete={handleDelete} onAddPhoto={handleAddPhoto} />} exact={true} />
            <Route path="/camera" render={() => <CameraButton onCapture={() => console.log('Captura de foto')} />} exact={true} />
            <Redirect exact path="/" to="/photos" />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default PhotoGalleryApp;
