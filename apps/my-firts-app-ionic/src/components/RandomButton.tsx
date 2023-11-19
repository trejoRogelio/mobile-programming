import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { dice } from 'ionicons/icons';

const ReloadButton: React.FC = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <IonButton expand="full" color="primary" onClick={reloadPage}>
      <IonIcon icon={dice} slot="start" />
      Random Image
    </IonButton>
  );
};

export default ReloadButton;