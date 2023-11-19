import React from 'react';
import { IonButton } from '@ionic/react';
import './BotonRefrescar.css';

const BotonRefrescar: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <IonButton className='boton'expand="full" onClick={handleRefresh}>
      Refresh
    </IonButton>
  );
};

export default BotonRefrescar;
