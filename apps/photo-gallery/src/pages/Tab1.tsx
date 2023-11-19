import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
} from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import ImageModal from '../components/ImageModal';
import SlideshowModal from '../components/SlideshowModal';
import SearchBar from '../components/SearchBar';
import './Tab1.css';

const Tab1: React.FC = () => {
  const { photos, deletePhoto, updatePhoto } = usePhotoGallery();
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlideshowModalOpen, setIsSlideshowModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleImageClick = (photo: UserPhoto) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleUpdateClick = async () => {
    if (selectedPhoto) {
      await updatePhoto(selectedPhoto);
      setSelectedPhoto(undefined);
      setIsModalOpen(false);
    }
  };

  const handleDeleteClick = () => {
    if (selectedPhoto) {
      deletePhoto(selectedPhoto);
      setSelectedPhoto(undefined);
      setIsModalOpen(false);
    }
  };

  const handlePreviousClick = () => {
    const currentIndex = photos.findIndex((photo) => photo.filepath === selectedPhoto?.filepath);
    const newIndex = Math.max(0, currentIndex - 1);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = photos.findIndex((photo) => photo.filepath === selectedPhoto?.filepath);
    const newIndex = Math.min(photos.length - 1, currentIndex + 1);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(undefined);
    setIsModalOpen(false);
  };

  const handleSlideshowClick = () => {
    setIsSlideshowModalOpen(true);
  };

  const handleStopSlideshow = () => {
    setIsSlideshowModalOpen(false);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.filepath.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
        <SearchBar onSearchChange={handleSearchChange} />
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {filteredPhotos.map((photo, index) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg
                  onClick={() => handleImageClick(photo)}
                  src={photo.webviewPath}
                  style={{ cursor: 'pointer' }}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {!isSlideshowModalOpen && (
          <IonButton
            onClick={handleSlideshowClick}
            color="primary"
            expand="full"
            style={{ marginBottom: '10px' }}
          >
            Start Slideshow
          </IonButton>
        )}

        {isModalOpen && selectedPhoto && (
          <ImageModal
            photos={photos}
            currentPhoto={selectedPhoto}
            onClose={handleCloseModal}
            onUpdate={handleUpdateClick}
            onDelete={handleDeleteClick}
            onNext={handleNextClick}
            onPrevious={handlePreviousClick}
          />
        )}

        {isSlideshowModalOpen && (
          <SlideshowModal photos={photos} onClose={handleStopSlideshow} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
