import './styles.scss';
import Card from './Card';
import cards from './data'; // data temporaires
import PropTypes from 'prop-types';

export default function ServiceCards() {
  return (
    <div className="servicecards">
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
        />
      ))}
    </div>
  );
}
