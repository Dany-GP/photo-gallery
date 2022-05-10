import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol,
  IonImg, useIonActionSheet, useIonToast
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import usePhotoGallery from '../hooks/usePhotoGallery';
import { useState } from 'react';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';


const [present, dismiss] = useIonToast();
const Tab2: React.FC = () => {

  async function showActionMenu(path: string) {
    const result = await ActionSheet.showActions({
      title: path,
      message: 'Select an option to perform',
      options: [
        {
          title: 'cancel',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });
    console.log('Action Sheet result:', result);
    console.log(result.index);

    if (result.index == 2) {
      deletePhoto(path);
      present('hello from hook', 3000);
      console.log("deleted");
    }

  }

  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
  console.log(photos);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg onClick={() => showActionMenu(photo.filepath)} src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
          <IonFab vertical='bottom' horizontal='center' slot='fixed'>
            <IonFabButton onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonFabButton>
          </IonFab>

        </IonContent>
      
    </IonPage>
  );
};

export default Tab2;


