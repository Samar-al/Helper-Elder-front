import { useLocation } from 'react-router-dom';
import './styles.scss';
import background from '../../assets/img/home_background_small.png';

export default function Background() {
  const location = useLocation();

  return (
    <div className={location.pathname === '/404' ? 'background background-notfound' : 'background'}>
      {location.pathname === '/' && <img src={background} alt="background" className="background_image" />}
    </div>
  );
}
