import { IonCol, IonRow } from '@ionic/react';
import './Player.css';
import PlayingCard from './PlayingCard';
import { getCardsOfFullDeck, shuffleArray } from './Deck';
import Card from './Card';

interface ContainerProps {
	value: number;
	selected: boolean;
	numberOfCardsToPlace: number;
}

const Player: React.FC<ContainerProps> = ({ value, selected, numberOfCardsToPlace }) => {

	const classes = selected ? 'player selected-card' : 'player';

	const shuffledDeck = shuffleArray(getCardsOfFullDeck());

	const playerCards = getRandomUniqueCards(shuffledDeck, numberOfCardsToPlace);

	const handlePlayerClick = () => {

	}

	const handleCardClick = () => {
		// setSelected(!selected);
	};

	return <IonRow>
		<IonCol className={classes} onClick={handlePlayerClick}>
				{value}
		</IonCol>
		{playerCards.map(card =>
			<IonCol>
				<PlayingCard suit={card.suit} value={card.value} open={true} width={44} height={62} selected={false} onClick={handleCardClick}></PlayingCard>
			</IonCol>
		)}
	</IonRow>
};

function getRandomUniqueCards(cards: Card[], count: number): Card[] {
  const shuffledCards = shuffleArray(cards);
  return shuffledCards.slice(0, count);
}

export default Player;