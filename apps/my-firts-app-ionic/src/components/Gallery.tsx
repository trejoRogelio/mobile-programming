import React, { useState, useEffect, useCallback } from 'react';
import { IonContent, IonImg, IonModal, IonButton, IonIcon } from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import { trashBin, arrowBack, reloadCircle } from 'ionicons/icons';

export function Gallery() {
    const { photos, takePhoto, deletePhoto } = usePhotoGallery();
    const [galleryPhotos, setGalleryPhotos] = useState<UserPhoto[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);
    const [isTakingPhoto, setIsTakingPhoto] = useState(false);

    useEffect(() => {
        // Set the initial photos when the component mounts
        setGalleryPhotos(photos);
    }, [photos]);

    const handleNewPhoto = (newPhoto: UserPhoto) => {
        // Update the state with the new photo
        setGalleryPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    };

    const openPhotoModal = useCallback((photo: UserPhoto) => {
        setSelectedPhoto(photo);
    }, []);

    const closePhotoModal = useCallback(() => {
        setSelectedPhoto(null);
    }, []);

    const handleDeletePhoto = useCallback(() => {
        if (selectedPhoto) {
            // Delete the photo from the gallery
            deletePhoto(selectedPhoto);
            // Update the state without the deleted photo
            setGalleryPhotos((prevPhotos) => prevPhotos.filter((p) => p !== selectedPhoto));
            // Close the modal
            closePhotoModal();
        }
    }, [deletePhoto, selectedPhoto, closePhotoModal]);


    <IonContent>
        <div className="grid-container">
            {galleryPhotos.map((photo, index) => (
                <IonImg key={index} src={photo.webviewPath} onClick={() => openPhotoModal(photo)} />
            ))}
        </div>


        <IonModal isOpen={!!selectedPhoto} onDidDismiss={closePhotoModal}>
            <IonContent fullscreen className="boton-content">

                <IonImg src={selectedPhoto?.webviewPath} />
                <IonButton onClick={handleDeletePhoto}>
                    <IonIcon aria-hidden="true" icon={trashBin} />
                </IonButton>
                <IonButton onClick={closePhotoModal}>
                    <IonIcon aria-hidden="true" icon={arrowBack} />
                </IonButton>
                <IonButton onClick={() => {
                    takePhoto();
                    handleDeletePhoto();
                }}>
                    <IonIcon aria-hidden="true" icon={reloadCircle} />
                </IonButton>
            </IonContent>
        </IonModal>
    </IonContent>    
}