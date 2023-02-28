import './styles.scss';
import {
  Button,
  Typography,
  Rating,
  TextField,
} from '@mui/material';

import userinfo from './data'; // data temporaires

export default function UserProfile() {
  console.log(userinfo);
  return (
    <div className="userprofile">
      <div className="userprofile_info_media">
        <img alt="userprofile picture" className="userprofile_picture" src= {userinfo.picture} />
        <div className="userprofile_rating">
          <Typography component="legend" />
            <Rating name="note" value={4} readOnly />
        </div>
        <div className="userprofile_button">
          <div className="userprofile_button_add_post">
            <Button className="userprofile_button_add_post" variant="contained">Ajouter une annonce</Button>
          </div>
          <div className="userprofile_button_message">
            <Button  variant="contained">Messagerie</Button>
          </div>
        </div>
      </div>

      <div className="userprofile_info_text">
        <div className="userprofile_button_modify">
          <Button variant="contained">Modifier</Button>
        </div>
        <div className="userprofile_info_text_paragraph">
          <p>Nom : {userinfo.firstname} </p>
          <p>Prénom : {userinfo.lastname} </p>
          <p>Date de naissance : {userinfo.birthdate} </p>
          <p>Email : {userinfo.mail} </p>
          <p>Localisation : {userinfo.place} </p>
          <p>Sexe : {userinfo.sex} </p>
        </div>

        <div className="userprofile_inputs">
          <div className="userprofile_input_skills">
            <TextField
              fullWidth
              rows={2}
              multiline="true"
              label="Compétences"
              value={userinfo.skills}
              // onChange={(event) => dispatch(typeSkills(event.target.value))}
            />
          </div>
          <div className="userprofile_input_description">
            <TextField
              fullWidth
              rows={10}
              multiline="true"
              label="Description"
              value={userinfo.description}
              // onChange={(event) => dispatch(typeDescription(event.target.value))}
            />
          </div>
        </div>

      </div>      
      
    </div>
  );
}
