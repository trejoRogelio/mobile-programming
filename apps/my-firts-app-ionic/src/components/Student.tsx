// src/components/TextComponent.tsx
import React from 'react';
import { IonText } from '@ionic/react';

interface StudentProps {
    text: string;
}

const StudentComponent: React.FC<StudentProps> = ({ text }) => {

    const textStyle = {
        fontSize: '50px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif', 
        fontWeight: 'bold', 
        letterSpacing: '2px', 
        lineHeight: '1.5', 
        margin: '20px 0', 
        padding: '10px',  
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
    };

    return <IonText style={textStyle}>{text}</IonText>;

};

export default StudentComponent;
