// TakePhotoButton.tsx
import React from 'react';
import './TakePhotoButton.css';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

const TakePhotoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
   <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton onClick={onClick}>
         <IonIcon icon={camera}></IonIcon>
      </IonFabButton>
   </IonFab>
);

export default TakePhotoButton;
