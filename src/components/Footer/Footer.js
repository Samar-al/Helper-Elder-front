import { NavLink } from 'react-router-dom';
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer">
      <NavLink
        to="a-propos"
        className={({ isActive }) => (isActive ? 'footer_link footer_link--active' : 'footer_link')}
      >
        À propos
      </NavLink>
      <NavLink
        to="mentions-légales"
        className={({ isActive }) => (isActive ? 'footer_link footer_link--active' : 'footer_link')}
      >
        Mentions légales
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? 'footer_link footer_link--active' : 'footer_link')}
      >
        Contact
      </NavLink>
    </div>
  );
}
