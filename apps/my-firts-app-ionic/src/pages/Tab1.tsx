// Tab1.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import TrashBin from '../components/TrashBin';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab1: React.FC = () => {
  const { deletedPhotos, restorePhoto } = usePhotoGallery();

  const handleRestore = (photo: UserPhoto) => {
    
    restorePhoto(photo);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Papelera</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <TrashBin deletedPhotos={deletedPhotos} onRestore={handleRestore} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
