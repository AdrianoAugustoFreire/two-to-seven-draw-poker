import './PlayingCard.css';
import Suits from './Suits';

interface ContainerProps {
	suit: Suits;
	value: string;
	open: boolean;
}

const PlayingCard: React.FC<ContainerProps> = ({ suit, value, open }) => {
	var imageName = 'assets/imgs/card-back-blue.png'
	if (open) {
		imageName = 'assets/imgs/' + suit + '-' + value + '.png'
	}
	return (
		<div className="container">
			<img width={88} height={124} src={imageName}></img>
		</div>
	);
};

export default PlayingCard;