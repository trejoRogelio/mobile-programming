import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import './TakePhotoButton.css'; // Importa el archivo de estilos

const TakePhotoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IonFab vertical="bottom" horizontal="center" slot="fixed" className="ion-fab-component">
    <IonFabButton onClick={onClick} className="ion-fab-button">
      <IonIcon icon={camera} className="ion-icon"></IonIcon>
    </IonFabButton>
  </IonFab>
);

export default TakePhotoButton;
