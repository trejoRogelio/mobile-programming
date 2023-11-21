import React from 'react';
import { IonPage, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { UserPhoto, usePhotoGallery } from '../hooks/usePhotoGallery';

type Tab2Props = {
  takePhoto: (photo?: UserPhoto | undefined) => Promise<void>;
};

const Tab2 = ({ takePhoto }: Tab2Props) => {

  return (
    <IonPage>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => {takePhoto()}}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Tab2;
