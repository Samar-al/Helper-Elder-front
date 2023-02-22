import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo/Logo.png';
import { toggleBurger } from '../../actions/burger';

export default function Header() {
  const { isBurgerOpen } = useSelector((state) => state.burger);

  const dispatch = useDispatch();

  return (
    <div className={`header ${isBurgerOpen ? 'show-nav' : 'hide-nav'}`}>

      <img alt="website logo" className="header_logo" src={logo} />

      <div className="header_nav">
        <li className="header_nav_item slideInDown-1">
          <NavLink
            to="/"
            className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Accueil
          </NavLink>
        </li>
        <li className="header_nav_item slideInDown-2">
          <NavLink
            to="/poster-une-annonce"
            className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Poster une annonce
          </NavLink>
        </li>
        <li className="header_nav_item slideInDown-3">
          <NavLink
            to="/mon-profil"
            className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Mon profil
          </NavLink>
        </li>
        <li className="header_nav_item slideInDown-4">
          <NavLink
            to="/connexion"
            className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Connexion
          </NavLink>
        </li>
        <li className="header_nav_item slideInDown-5">
          <NavLink
            to="/inscription"
            className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Inscription
          </NavLink>
        </li>
      </div>
      <button type="button" className="header_burger">
        <span
          className="burger_bar"
          onClick={() => {
            const action = toggleBurger();
            dispatch(action);
          }}
        />
      </button>
    </div>
  );
}
