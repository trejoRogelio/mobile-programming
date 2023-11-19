import React, { useState } from 'react';
import { IonActionSheet, IonIcon } from '@ionic/react';
import { trash, close, pencil } from 'ionicons/icons';
import { UserPhoto } from '../hooks/usePhotoGallery';

type AbrirMenuProps = {
  isOpen: boolean;
  photoToDelete: UserPhoto | undefined;
  deletePhoto: () => void;
  takePhoto: () => void;
  onDidDismiss: () => void;
};

const AbrirMenu: React.FC<AbrirMenuProps> = ({ isOpen, photoToDelete, deletePhoto, takePhoto, onDidDismiss }) => {
  return (
    <IonActionSheet
      isOpen={isOpen}
      buttons={[
        {
          text: 'Eliminar Foto',
          role: 'destructive',
          icon: trash,
          handler: () => {
            deletePhoto();
            onDidDismiss();
          },
        },
        {
          text: 'Cambiar Foto',
          role: 'update',
          icon: pencil,
          handler: () => {
            takePhoto();
            onDidDismiss();
          },
        },
        {
          text: 'Cancelar',
          icon: close,
          role: 'cancel',
        },
      ]}
      onDidDismiss={onDidDismiss}
    />
  );
};

export default AbrirMenu;
