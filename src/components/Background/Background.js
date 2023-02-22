import './styles.scss';
import background from '../../assets/img/homepage_background.png';

export default function Background() {
  return (
    <div className="background">
      <img src={background} alt="backgound" className="background_image" />
    </div>
  );
}
