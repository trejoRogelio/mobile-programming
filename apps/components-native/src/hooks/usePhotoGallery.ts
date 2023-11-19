import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

export function usePhotoGallery() {
  const takePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      // Guardar la foto en el sistema de archivos
      const savedPhoto = await savePhoto(photo);
      console.log('Photo saved locally:', savedPhoto);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  const savePhoto = async (photo: any) => {
    // Convertir la URI de la foto a un buffer de datos
    const base64Data = await fetch(photo.webPath!).then((res) => res.blob());

    // Obtener el directorio de la aplicación para almacenar la foto
    const savedFile = await Filesystem.writeFile({
      path: 'photos/' + new Date().getTime() + '.jpeg',
      data: base64Data,
      directory: Directory.Data,
    });

    // Devolver la información del archivo guardado
    return {
      filepath: savedFile.uri,
      webviewPath: photo.webPath
    };
  };

  return {
    takePhoto,
  };
}
