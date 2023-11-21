import React from 'react';
import { IonAlert } from '@ionic/react';

interface PhotoAlertProps {
  showAlert: boolean;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoAlert: React.FC<PhotoAlertProps> = ({ showAlert, setShowAlert }) => {
  return (
    <IonAlert
      isOpen={showAlert}
      onDidDismiss={() => setShowAlert(false)}
      header={'Imagen Subida'}
      message={'La imagen se ha subido correctamente.'}
      buttons={['OK']}
    />
  );
};

export default PhotoAlert;