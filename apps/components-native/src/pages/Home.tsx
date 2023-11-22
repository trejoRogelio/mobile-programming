import { IonButton, IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

// Camara imports
import { Camera, CameraResultType } from "@capacitor/camera";
import { Geolocation } from "@capacitor/geolocation";
import { Toast } from "@capacitor/toast";
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [imageUrl, setImageUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png");

    const camara = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });

            setImageUrl(image.webPath!)
        } catch (error) {
            Toast.show({
                text: "Cámara cancelada!!!",
                duration: "long",
                position: "top"
            });
        }
    }

    useEffect(() => {
        (async () => {
            const position = await Geolocation.getCurrentPosition();

            console.log(position)
        })();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Hola</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={camara}>Default</IonButton>
                <IonImg
                    alt='imagen de prueba'
                    src={imageUrl}
                />
            </IonContent>
        </IonPage>
    );
};

export default Home;
