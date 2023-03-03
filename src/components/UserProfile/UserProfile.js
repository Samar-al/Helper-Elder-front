import './styles.scss';
import {
  Button,
  Typography,
  Rating,
} from '@mui/material';

import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { formatDate } from '../../utils/functions';

export default function UserProfile() {
  const { user } = useSelector((state) => state.authentication);
  const { currentPost } = useSelector((state) => state.post);
  const location = useLocation();
  const isMyProfile = location.pathname === '/mon-profil';
  const pageUser = isMyProfile ? user : currentPost.user;

  function displayGender() {
    if (pageUser.gender === 1) {
      return 'Homme';
    }
    if (pageUser.gender === 2) {
      return 'Femme';
    }

    return 'Ne préfère pas répondre';
  }

  return (
    <div className="userprofile">
      <div className="userprofile_info_media">
        <img alt="userprofile" className="userprofile_picture" src={pageUser.picture ? pageUser.picture : avatarPlaceholder} />
        <div className="userprofile_rating">
          <Typography component="legend" />
          <Rating name="note" value={pageUser.avgRating} readOnly />
        </div>
        <div className="userprofile_button">
          {isMyProfile && (
          <div className="userprofile_button_add_post">
            <Button className="userprofile_button_add_post" variant="contained">
              <NavLink
                to="/poster-une-annonce"
                className={(isActive) => (isActive ? 'header_nav_link header_nav_link--active' : 'header_nav_link')}
              >
                Poster une annonce
              </NavLink>
            </Button>
          </div>
          )}
          <div className="userprofile_button_message">
            <Button variant="contained"> {(isMyProfile ? 'Messagerie' : 'Envoyer un message')} </Button>
          </div>
        </div>
      </div>
      <div className="userprofile_info_text">
        {isMyProfile && (
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
        )}
        <div className="userprofile_info_text_paragraph">
          <p><span>Prénom :</span> {pageUser.firstname} </p>
          <p><span>Nom :</span> {pageUser.lastname} </p>
          <p><span>Date de naissance :</span> {formatDate(pageUser.birthdate)} </p>
          <p><span>Email :</span> {pageUser.email} </p>
          <p><span>Localisation :</span> {pageUser.postalCode} </p>
          <p><span>Sexe :</span> {displayGender(pageUser.gender)} </p>
        </div>

        <div className="userprofile_input">
          <div className="userprofile_input_description">
            <h1> Description </h1>
            <p> {pageUser.description} </p>
          </div>
        </div>

      </div>

    </div>
  );
}
