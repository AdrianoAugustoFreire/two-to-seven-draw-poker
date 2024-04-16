import { useState } from 'react';
import './PlayingCard.css';
import Suits, { SuitNames } from './Suits';

interface ContainerProps {
	value: string;
	suit: Suits;
	width: number;
	height: number;
	selected: boolean;
	open: boolean;
	onClick: () => void;
}

function getCardName(cardValue: string): string  {
	switch(cardValue) {
		case '1':
			return 'Ace';
		case '2':
			return 'Two';
		case '3':
			return 'Three';
		case '4':
			return 'Four';
		case '5':
			return 'Five';
		case '6':
			return 'Six';
		case '7':
			return 'Seven';
		case '8':
			return 'Eight';
		case '9':
			return 'Nine';
		case '10':
			return 'Ten';
		case '11':
			return 'Jack';
		case '12':
			return 'Queen';
		case '13':
			return 'King';
		default:
			return '?';
	}
}

const PlayingCard: React.FC<ContainerProps> = ({ value, suit, width, height, open }) => {

	const [cardIsSelected, setSelected] = useState<boolean>(false);

	const imageName = open ? `assets/imgs/${suit}-${value}.png` : 'assets/imgs/card-back-blue.png';
	const classes = cardIsSelected ? 'playing-card selected-card' : 'playing-card';

	const handleCardClick = () => {
		setSelected(!cardIsSelected);
	};

	return <img
		className={classes}
		width={width}
		height={height}
		src={imageName}
		alt={`${getCardName(value)} of ${SuitNames[suit]}`}
		onClick={handleCardClick}
	/>;
};

export default PlayingCard;

