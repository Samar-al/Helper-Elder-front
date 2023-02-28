import './styles.scss';
import PropTypes from 'prop-types';
import Card from './Card';
import cards from './data'; // data temporaires

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
