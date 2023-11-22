// Camera.tsx
import React from 'react';
import CameraButton from '../components/CameraButton';

const Camera: React.FC = () => {
  return (
    <div>
      <h2>Camera</h2>
      <CameraButton onCapture={() => console.log('Captura de foto')} />
    </div>
  );
};

export default Camera;
