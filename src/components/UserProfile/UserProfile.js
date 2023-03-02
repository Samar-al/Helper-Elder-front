import './styles.scss';
import {
  Button,
  Typography,
  Rating,
} from '@mui/material';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import userinfo from './data'; data temporaires
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { formatDate } from '../../utils/functions';

export default function UserProfile() {
  const { user } = useSelector((state) => state.authentication);
  return (
    <div className="userprofile">
      <div className="userprofile_info_media">
        <img alt="userprofile" className="userprofile_picture" src={user.picture ? user.picture : avatarPlaceholder} />
        <div className="userprofile_rating">
          <Typography component="legend" />
          <Rating name="note" value={user.avgRating} readOnly />
        </div>
        <div className="userprofile_button">
          <div className="userprofile_button_add_post">
            <Button className="userprofile_button_add_post" variant="contained">Ajouter une annonce</Button>
          </div>
          <div className="userprofile_button_message">
            <Button variant="contained">Messagerie</Button>
          </div>
        </div>
      </div>

      <div className="userprofile_info_text">
        <div className="userprofile_button_modify">
          <Button variant="contained">
            <NavLink
              to="/mon-profil/modifier"
              className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
            >
              Modifier
            </NavLink>
          </Button>
        </div>
        <div className="userprofile_info_text_paragraph">
          <p><span>Prénom :</span> {user.firstname} </p>
          <p><span>Nom :</span> {user.lastname} </p>
          <p><span>Date de naissance :</span> {formatDate(user.birthdate)} </p>
          <p><span>Email :</span> {user.email} </p>
          <p><span>Localisation :</span> {user.postalCode} </p>
          <p><span>Sexe :</span> {user.gender} </p>
          {/* TO DO mettre un affichage conditionnel pour le sexe */}
        </div>

        <div className="userprofile_input">
          <div className="userprofile_input_description">
            <h1> Description </h1>
            <p> {user.description} </p>
          </div>
        </div>

      </div>

    </div>
  );
}
