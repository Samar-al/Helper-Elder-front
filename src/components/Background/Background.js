import { useLocation } from 'react-router-dom';
import './styles.scss';
import background from '../../assets/img/homepage_background.png';

export default function Background() {
  const location = useLocation();

  return (
    <div className="background">
      {location.pathname === '/' && <img src={background} alt="background" className="background_image" />}
    </div>
  );
}
