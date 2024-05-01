import { useState } from 'react';
import './PlayingCard.css';
import Suits from './Suits';

import PokerEvaluator from 'poker-evaluator';
import { getSuitValue } from './Suits';


interface ContainerProps {
	value: string;
	suit: Suits;
	width: number;
	height: number;
	selected: boolean;
	open: boolean;
	unavailable?: boolean;
	onClick?: () => void;
}

function getCardName(cardValue: string): string  {
	switch(cardValue) {
		case 'A':
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
		case 'T':
			return 'Ten';
		case 'J':
			return 'Jack';
		case 'Q':
			return 'Queen';
		case 'K':
			return 'King';
		default:
			return '?';
	}
}

const PlayingCard: React.FC<ContainerProps> = ({ value, suit, width, height, open, unavailable, onClick }) => {

	const suitLetters = ['C', 'D', 'H', 'S'];
	const [cardIsSelected, setSelected] = useState<boolean>(false);

	const imageName = open ? `assets/imgs/${value}${suitLetters[suit]}.svg` : 'assets/imgs/1B.svg';

	const classes = cardIsSelected ? 'playing-card selected-card' : 'playing-card';
	const overlayClasses = unavailable ? "unavailable-overlay" : "";
	const handleCardClick = () => {
		setSelected(!cardIsSelected);
		if(onClick) {
			onClick();
		}
	};

	return <>
		<img
			className={classes}
			width={width}
			height={height}
			src={imageName}
			alt={`${getCardName(value)} of ${getSuitValue(suit)}`}
			onClick={handleCardClick}
		/>
		{
		 <div className={overlayClasses}></div>}
	</>
	;
};

export default PlayingCard;

