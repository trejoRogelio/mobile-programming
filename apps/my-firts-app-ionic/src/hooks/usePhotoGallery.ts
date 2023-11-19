// usePhotoGallery.ts
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { v4 as uuid } from 'uuid';

const PHOTO_STORAGE = 'photos';
const DELETED_PHOTO_STORAGE = 'deletedPhotos';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [deletedPhotos, setDeletedPhotos] = useState<UserPhoto[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });

      const storedPhotos = (value ? JSON.parse(value) : []) as UserPhoto[];
      setPhotos(storedPhotos);
    };

    const loadDeletedPhotos = async () => {
      const { value } = await Preferences.get({ key: DELETED_PHOTO_STORAGE });

      const storedDeletedPhotos = (value ? JSON.parse(value) : []) as UserPhoto[];
      setDeletedPhotos(storedDeletedPhotos);
    };

    loadPhotos();
    loadDeletedPhotos();
  }, []);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    return savedFileImage;
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string;

    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      return {
        id: uuid(),
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        id: uuid(),
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const deletePhoto = async (photo: UserPhoto) => {
    
    const newPhotos = photos.filter((p) => p.id !== photo.id);
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

  
    const newDeletedPhotos = [photo, ...deletedPhotos];
    setDeletedPhotos(newDeletedPhotos);
    Preferences.set({ key: DELETED_PHOTO_STORAGE, value: JSON.stringify(newDeletedPhotos) });
  };

  const restorePhoto = async (photo: UserPhoto) => {
    
    const newDeletedPhotos = deletedPhotos.filter((p) => p.id !== photo.id);
    setDeletedPhotos(newDeletedPhotos);
    Preferences.set({ key: DELETED_PHOTO_STORAGE, value: JSON.stringify(newDeletedPhotos) });

    
    const newPhotos = [photo, ...photos];
    setPhotos(newPhotos);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  return {
    photos,
    deletedPhotos,
    takePhoto,
    deletePhoto,
    restorePhoto,
  };
}


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

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
        reject('method did not return a string')
      }
    };
    reader.readAsDataURL(blob);
  });
}
