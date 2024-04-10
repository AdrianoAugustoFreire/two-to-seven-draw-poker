import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './Cards.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol><img width={88} height={124} src='assets/imgs/clubs-ace.png'></img></IonCol>
            <IonCol><img width={88} height={124} src='assets/imgs/clubs-j.jpg'></img></IonCol>
            <IonCol>3</IonCol>
            <IonCol>4</IonCol>
            <IonCol>5</IonCol>
            <IonCol>6</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
