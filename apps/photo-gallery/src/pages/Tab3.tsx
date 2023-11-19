import React, { useState } from 'react';
import useCamera from '../hooks/useCameraHook';
const Tab3: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { takePicture, stopCamera } = useCamera();

  const captureImage = () => {
    const imageData = takePicture();
    if (imageData) {
      setCapturedImage(imageData);
      stopCamera(); // Detener la cámara después de capturar la imagen
    }
  };

  return (
    <div>
      <h2>Image Preview</h2>
      {capturedImage ? <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%' }} /> : <p>No image available</p>}
    </div>
  );
};

export default Tab3;
