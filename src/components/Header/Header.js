import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo/Logo.png';
import { closeBurger, toggleBurger } from '../../actions/burger';
import { handleLogout } from '../../actions/authentication';
import { displayInfoMessages } from '../../actions/app';

export default function Header() {
  const { isBurgerOpen } = useSelector((state) => state.burger);
  const { user } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  function handleSubmitLogout() {
    dispatch(handleLogout());
    dispatch(closeBurger());
    dispatch(displayInfoMessages(['Utilisateur déconnecté !']));
  }

  return (
    <div className={`header ${isBurgerOpen ? 'show-nav' : 'hide-nav'}`}>

      <NavLink
        to="/"
      >
        <img alt="website logo" className="header_logo" src={logo} />
      </NavLink>

      <div className="header_nav">
        <li className="header_nav_item slideInDown-1">
          <NavLink
            to="/"
            onClick={() => dispatch(closeBurger())}
            className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
          >
            Accueil
          </NavLink>
        </li>
        {!user && (
          <>
            <li className="header_nav_item slideInDown-4">
              <NavLink
                to="/connexion"
                onClick={() => dispatch(closeBurger())}
                className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
              >
                Connexion
              </NavLink>
            </li>

            <li className="header_nav_item slideInDown-5">
              <NavLink
                to="/inscription"
                onClick={() => dispatch(closeBurger())}
                className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
              >
                Inscription
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li className="header_nav_item slideInDown-2">
              <NavLink
                to="/poster-une-annonce"
                onClick={() => dispatch(closeBurger())}
                className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
              >
                Poster une annonce
              </NavLink>
            </li>
            <li className="header_nav_item slideInDown-3">
              <NavLink
                to="/mon-profil"
                onClick={() => dispatch(closeBurger())}
                className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
              >
                Mon profil
              </NavLink>
            </li>
            <li className="header_nav_item slideInDown-4">
              <NavLink
                to="/conversation"
                onClick={() => dispatch(closeBurger())}
                className={({ isActive }) => (isActive ? 'header_nav_link header_nav_link-active' : 'header_nav_link')}
              >
                Mes Conversations
              </NavLink>
            </li>
            <li className="header_nav_item slideInDown-5">
              <NavLink
                className="header_nav_link"
                onClick={() => handleSubmitLogout()}
                to="/"
              >
                Déconnexion
              </NavLink>
            </li>
          </>
        )}
      </div>
      <button type="button" className="header_burger">
        <span
          className="burger_bar"
          onClick={() => dispatch(toggleBurger())}
        />
      </button>
    </div>
  );
}
