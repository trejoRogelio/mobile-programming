import React from 'react'
import { IonContent, IonFab, IonFabButton, IonIcon  } from '@ionic/react'
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

export function Camera() {
  const { takePhoto } = usePhotoGallery();
<IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
}