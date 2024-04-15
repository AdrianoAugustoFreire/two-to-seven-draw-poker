import './PlayingCard.css';
import Suits from './Suits';

interface ContainerProps {
	suit: Suits;
	value: string;
	open: boolean;
	width: number;
	height: number;
}

const PlayingCard: React.FC<ContainerProps> = ({ suit, value, open, width, height}) => {
	var imageName = 'assets/imgs/card-back-blue.png';
	if (open) {
		imageName = 'assets/imgs/' + suit + '-' + value + '.png'
	}

	return (<img width={width} height={height} src={imageName}></img>);
};

export default PlayingCard;