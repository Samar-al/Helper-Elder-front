import './styles.scss';
import cardPlaceholder from '../../assets/img/card_placeholder.png';

export default function Card() {
  
  return (
          <div className="card">
            <img alt="website logo" className="card_logo" src={cardPlaceholder} />
            <h1 className="card_title">Courses</h1>
          </div>
  );
}


 