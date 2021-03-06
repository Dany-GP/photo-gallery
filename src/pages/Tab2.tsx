import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol,
  IonImg, useIonActionSheet 
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import usePhotoGallery from '../hooks/usePhotoGallery';
import { useState } from 'react';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

import {useIonToast} from '@ionic/react';


const Tab2: React.FC = () => {
  const [present, dismiss] = useIonToast();
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
      console.log("deleted");
    }

    present(result.index  + "", 3000);

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


