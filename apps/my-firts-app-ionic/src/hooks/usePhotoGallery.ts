import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

// Definimos la clave de almacenamiento para las fotos en las preferencias
const PHOTO_STORAGE = 'photos';

// Custom hook para gestionar la galería de fotos
export function usePhotoGallery() {
  // Estado local para almacenar las fotos
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  // Estado local para indicar si se está capturando una nueva foto
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  // Efecto para cargar las fotos guardadas al montar el componente
  useEffect(() => {
    const loadSaved = async () => {
      // Obtenemos el valor de las preferencias con la clave PHOTO_STORAGE
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });

      // Parseamos el valor a un array de UserPhoto o inicializamos un array vacío
      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

      // Si no estamos en plataforma híbrida, cargamos las fotos desde el sistema de archivos
      if (!isPlatform('hybrid')) {
        for (let photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }

      // Actualizamos el estado con las fotos cargadas
      setPhotos(photosInPreferences);
    };

    // Llamamos a la función para cargar fotos al montar el componente
    loadSaved();
  }, []);

  // Función para capturar una nueva foto
  const takePhoto = async () => {
    setIsTakingPhoto(true);

    // Utilizamos la API de la cámara para capturar una foto
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Generamos un nombre de archivo único
    const fileName = new Date().getTime() + '.jpeg';

    // Guardamos la foto y obtenemos la información de la foto guardada
    const savedFileImage = await savePicture(photo, fileName);

    // Actualizamos el estado con la nueva foto
    setPhotos((prevPhotos) => [savedFileImage, ...prevPhotos]);

    // Actualizamos las preferencias con el nuevo estado de fotos
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(photos) });

    // Indicamos que hemos terminado de capturar la foto
    setIsTakingPhoto(false);
  };

  // Función para capturar una nueva foto y reemplazar una existente
  const takeNewPhoto = async (selectedPhoto: UserPhoto) => {
    setIsTakingPhoto(true);

    // Utilizamos la API de la cámara para capturar una foto
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Generamos un nombre de archivo único
    const fileName = new Date().getTime() + '.jpeg';

    // Guardamos la nueva foto y obtenemos la información de la foto guardada
    const savedFileImage = await savePicture(photo, fileName);

    // Actualizamos el estado reemplazando la foto seleccionada por la nueva foto
    setPhotos((prevPhotos) =>
      prevPhotos.map((p) => (p === selectedPhoto ? savedFileImage : p))
    );

    // Actualizamos las preferencias con el nuevo estado de fotos
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(photos) });

    // Indicamos que hemos terminado de capturar la foto
    setIsTakingPhoto(false);
  };

  // Función para guardar una foto en el sistema de archivos
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string;

    // Si estamos en plataforma híbrida, leemos el archivo desde el sistema de archivos
    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      // Si no estamos en plataforma híbrida, obtenemos el código base64 directamente desde la ruta web de la foto
      base64Data = await base64FromPath(photo.webPath!);
    }

    // Escribimos el archivo en el sistema de archivos
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Construimos y devolvemos la información de la foto guardada
    if (isPlatform('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  // Función para eliminar una foto
  const deletePhoto = async (photo: UserPhoto) => {
    // Filtramos las fotos para obtener un nuevo array sin la foto que queremos eliminar
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // Actualizamos las preferencias con el nuevo estado de fotos
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // Obtenemos el nombre de archivo a partir de la ruta de la foto
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);

    // Eliminamos el archivo del sistema de archivos
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });

    // Actualizamos el estado con las fotos restantes
    setPhotos(newPhotos);
  };

  // Devolvemos las funciones y el estado necesario para gestionar la galería de fotos
  return {
    deletePhoto,
    photos,
    takePhoto,
    takeNewPhoto,
    isTakingPhoto,
  };
}

// Interfaz para representar una foto del usuario
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

// Función para obtener el código base64 de una imagen a partir de su ruta
export async function base64FromPath(path: string): Promise<string> {
  // Realizamos una solicitud de red para obtener la imagen en formato blob
  const response = await fetch(path);
  const blob = await response.blob();

  // Convertimos el blob a base64 utilizando FileReader
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('Method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}
