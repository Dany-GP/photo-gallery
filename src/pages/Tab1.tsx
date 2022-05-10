import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { LocalNotifications } from '@capacitor/local-notifications';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={() => lanzarNot()} expand="block" color='primary' shape='round'>Not</IonButton>
        <ExploreContainer name="Tab 1 page" />

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
async function lanzarNot() {

  await LocalNotifications.schedule({
    notifications: [{
      title: 'Titulo de la notificacion',
      body:   "xd xd xd xd xd xd xd xd",
      id: 1,
      
    }]
  });
  console.log("listo");
}

