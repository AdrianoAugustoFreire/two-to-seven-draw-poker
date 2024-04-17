import { IonCol, IonRow } from '@ionic/react';
import './Player.css';
import PlayingCard from './PlayingCard';
import Card from './Card';

interface ContainerProps {
	value: number;
	selected: boolean;
	cards: Card[];
}

const Player: React.FC<ContainerProps> = ({ value, selected, cards }) => {

	const classes = selected ? 'player selected-card' : 'player';

	const handlePlayerClick = () => {

	}

	const handleCardClick = () => {
		// setSelected(!selected);
	};

	return <IonRow>
		<IonCol className={classes} onClick={handlePlayerClick}>
			Player {value + 1}
		</IonCol>
		{cards.map(card =>
			<IonCol>
				<PlayingCard suit={card.suit} value={card.value} open={true} width={66} height={93} selected={false} onClick={handleCardClick}></PlayingCard>
			</IonCol>
		)}
	</IonRow>
};

export default Player;