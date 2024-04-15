import './PlayingCard.css';
import Suits, { SuitNames } from './Suits';

interface ContainerProps {
	suit: Suits;
	value: string;
	open: boolean;
	width: number;
	height: number;
	selected: boolean;
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

const PlayingCard: React.FC<ContainerProps> = ({ suit, value, open, width, height, selected }) => {

  const imageName = open ? `assets/imgs/${suit}-${value}.png` : 'assets/imgs/card-back-blue.png';
  const classes = selected ? 'playing-card selected-card' : 'playing-card';

  return <img className={classes} width={width} height={height} src={imageName} alt={`${getCardName(value)} of ${SuitNames[suit]}`} />;
};

export default PlayingCard;

