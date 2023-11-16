import { useState, useEffect } from 'react';
import { generateId, isPlatform } from '@ionic/react';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { UserPhoto } from '../types';
import { useIdHook } from './useIdHook';

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}
const savePicture = async (
  photo: Photo,
  fileName: string,
  id: string,
): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" will detect Cordova or Capacitor;
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    if (typeof file.data === 'string') {
      base64Data = file.data;
    } else {
      const arrayBuffer = await file.data.arrayBuffer();
      const textDecoder = new TextDecoder('utf-8');
      base64Data = textDecoder.decode(arrayBuffer);
    }
  } else {
    base64Data = await base64FromPath(photo.webPath!);
  }
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  if (isPlatform('hybrid')) {
    // Display the new image by rewriting the 'file://' path to HTTP
    // Details: https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      id,
    };
  } else {
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
      id,
    };
  }
};
const PHOTO_STORAGE = 'photos';
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [loadingPh, setLoadingPh] = useState<boolean>(true);

  const { generateId } = useIdHook();
  useEffect(() => {
    const loadSaved = async () => {
      setLoadingPh(true);
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (
        value ? JSON.parse(value) : []
      ) as UserPhoto[];

      for (let photo of photosInPreferences) {
        const file = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
      }
      setPhotos(photosInPreferences);
      setLoadingPh(false);
    };
    loadSaved();
  }, []);
  const takePhoto = async (photoNew?: UserPhoto) => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + '.jpeg';
    const savedFileImage = await savePicture(
      photo,
      fileName,
      photoNew ? photoNew.id : generateId(),
    );

    let newPhotos = photos.map(photoItem =>
      photoItem.id === (photoNew ? photoNew.id : null)
        ? savedFileImage
        : photoItem,
    );

    if (!photoNew) {
      // Si idEdit no existe, agrega la nueva foto al array
      newPhotos = [savedFileImage, ...newPhotos.filter(Boolean)];
    }
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    const newPhotos = photos.filter(p => p.filepath !== photo.filepath);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // delete photo file from filesystem
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
    setPhotos(newPhotos);
  };

  return {
    loadingPh,
    photos,
    takePhoto,
    deletePhoto,
  };
}
