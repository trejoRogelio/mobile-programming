// AddPhotoForm.tsx
import React, { useState } from 'react';
import { IonInput, IonButton, IonAlert } from '@ionic/react';

interface AddPhotoFormProps {
  onAddPhoto: (url: string) => void;
}

const AddPhotoForm: React.FC<AddPhotoFormProps> = ({ onAddPhoto }) => {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleAddPhoto = () => {
    if (photoUrl.trim() === '') {
      setShowAlert(true);
    } else {
      onAddPhoto(photoUrl);
      setPhotoUrl('');
    }
  };

  return (
    <>
      <IonInput
        placeholder="Enter photo URL"
        value={photoUrl}
        onIonChange={(e) => setPhotoUrl(e.detail.value!)}
      />
      <IonButton onClick={handleAddPhoto}>Add Photo</IonButton>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Error"
        message="Please enter a valid photo URL."
        buttons={['OK']}
      />
    </>
  );
};

export default AddPhotoForm;
