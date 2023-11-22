// CameraButton.tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import { Capacitor, Plugins } from '@capacitor/core';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { FilesystemDirectory } from '@capacitor/filesystem';
import { Filesystem } from '@capacitor/filesystem';


interface CameraButtonProps {
  onCapture: (photoUrl: string) => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onCapture }) => {
  const handleCapture = async () => {
    try {
      // Utiliza el plugin Camera de Capacitor para capturar la foto
      const { Camera } = Plugins;
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      // Lógica para guardar la foto capturada (almacenar en el dispositivo, etc.)
      const fileName = `photo_${new Date().getTime()}.jpg`;
      await Filesystem.writeFile({
        path: fileName,
        data: photo.base64String || '',
        directory: FilesystemDirectory.Data,
      });

      // Llama a onCapture para informar a la aplicación principal sobre la captura exitosa
      onCapture(fileName);
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  };

  return <IonButton onClick={handleCapture}>Capture Photo</IonButton>;
};

export default CameraButton;
