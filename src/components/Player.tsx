import { IonCol, IonRow } from '@ionic/react';
import './Player.css';
import PlayingCard from './PlayingCard';
import { getCardsOfFullDeck, getRandomUniqueCards, shuffleArray } from './Deck';
import Card from './Card';

interface ContainerProps {
	value: number;
	selected: boolean;
	numberOfCardsToPlace: number;
}

const Player: React.FC<ContainerProps> = ({ value, selected, numberOfCardsToPlace }) => {

	const classes = selected ? 'player selected-card' : 'player';

	const shuffledDeck = shuffleArray(getCardsOfFullDeck());

	const playersCards = getRandomUniqueCards(shuffledDeck, numberOfCardsToPlace);

	const handlePlayerClick = () => {

	}

	const handleCardClick = () => {
		// setSelected(!selected);
	};

	return <IonRow>
		<IonCol className={classes} onClick={handlePlayerClick}>
			Player {value + 1}
		</IonCol>
		{playersCards.map(card =>
			<IonCol>
				<PlayingCard suit={card.suit} value={card.value} open={true} width={66} height={93} selected={false} onClick={handleCardClick}></PlayingCard>
			</IonCol>
		)}
	</IonRow>
};

export default Player;