import { useState, useEffect } from 'react';
import { isPlatform, useIonRouter } from '@ionic/react';

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { UserPhoto } from '../types/userPhoto';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const [newPhotosCount, setNewPhotosCount] = useState(0);
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    if(photo) {
      const id = Date.now()
      const fileName = id.toString() + '.jpeg';
      const newPhotos = [
        {
          filepath: fileName,
          webviewPath: photo.webPath,
          id,
        },
        ...photos,
      ];
      setNewPhotosCount((current)=>current + 1)
      setPhotos(newPhotos);
    }
  };
  const resetNewPhotosCounter = () => {
    setNewPhotosCount(0);
  }
  const deletePhoto = (id: number) => {
    setPhotos((current)=>{
      return current.filter((pic)=> pic.id !== id)
    })
  }

  const replacePhoto = async (id:number) => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    if(photo) {
      setPhotos((current)=> {
        return current.map((pic) => { 
          if(pic.id === id){
            return {...pic, webviewPath: photo.webPath}
          }
          return pic
         })
      });
    }
  }

  return {
    photos,
    newPhotosCount,
    takePhoto,
    resetNewPhotosCounter,
    deletePhoto,
    replacePhoto,
  };
}