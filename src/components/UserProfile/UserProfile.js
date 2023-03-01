import './styles.scss';
import {
  Button,
  Typography,
  Rating,
} from '@mui/material';

import userinfo from './data'; // data temporaires
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';

export default function UserProfile() {
  return (
    <div className="userprofile">
      <div className="userprofile_info_media">
        <img alt="userprofile" className="userprofile_picture" src={userinfo.picture ? userinfo.picture : avatarPlaceholder} />
        <div className="userprofile_rating">
          <Typography component="legend" />
          <Rating name="note" value={4} readOnly />
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
          <Button variant="contained">Modifier</Button>
        </div>
        <div className="userprofile_info_text_paragraph">
          <p><span>Prénom :</span> {userinfo.firstname} </p>
          <p><span>Nom :</span> {userinfo.lastname} </p>
          <p><span>Date de naissance :</span> {userinfo.birthdate} </p>
          <p><span>Email :</span> {userinfo.mail} </p>
          <p><span>Localisation :</span> {userinfo.place} </p>
          <p><span>Sexe :</span> {userinfo.gender} </p>
        </div>

        <div className="userprofile_input">
          <div className="userprofile_input_description">
            <h1> Description </h1>
            <p> {userinfo.description} </p>
          </div>
        </div>

      </div>

    </div>
  );
}
