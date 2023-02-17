import { NavLink } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logo/Logo.png';

export default function Header() {
  return (
    <div className="header">

      <img alt="website logo" className="header_logo" src={logo} />

      <div className="header_nav">
        <NavLink
          to="/"
          className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/poster-une-annonce"
          className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
        >
          Poster une annonce
        </NavLink>
        <NavLink
          to="/mon-profil"
          className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
        >
          Mon profil
        </NavLink>
      </div>

      <div className="header_button">
        <NavLink
          to="/connexion"
          className="header_button"
        >
          Connexion
        </NavLink>
      </div>
      <div className="header_button">
        <NavLink
          to="/inscription"
          className="header_button"
        >
          Inscription
        </NavLink>
      </div>

    </div>
  );
}
