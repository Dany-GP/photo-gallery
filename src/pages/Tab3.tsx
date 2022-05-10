import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import usePhotoGallery from '../hooks/usePhotoGallery';
import { videocam } from 'ionicons/icons';


const Tab3: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {photos.map((photo, index) => (
          <IonCard>
            <IonItem>
              <IonLabel>{index}</IonLabel>
              <IonButton fill="outline" slot="end">View</IonButton>
            </IonItem>

            <IonCardContent>
              {photo.filepath}
            </IonCardContent>
            <IonImg src={photo.webviewPath} />
          </IonCard>
        ))}
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={videocam}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
