// src/components/TextComponent.tsx
import React from 'react';
import { IonText } from '@ionic/react';

interface InstructionsProps {
    text: string;
}

const InstructionsComponent: React.FC<InstructionsProps> = ({ text }) => {

    const textStyle = {
        fontSize: '40px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif', 
        letterSpacing: '2px', 
        lineHeight: '1.5', 
        margin: '20px 0', 
        padding: '10px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
    };

    return <IonText style={textStyle}>{text}</IonText>;

};

export default InstructionsComponent;
