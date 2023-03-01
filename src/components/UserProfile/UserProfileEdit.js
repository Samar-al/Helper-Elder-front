import './styles.scss';
import {
  Button,
  Typography,
  Rating,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
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
      {/* TO DO put a form around the code */}
      <div className="userprofile_info_text">
        <div className="userprofile_button_modify">
          <Button variant="contained">Enregistrer</Button>
        </div>
        <div className="userprofile_info_text_paragraph_edit">
          <div className="userprofile_form_item">
            <TextField
              size="small"
              label="Nom"
            />
          </div>
          <div className="userprofile_form_item">
            <TextField
              size="small"
              label="Prénom"
            />
          </div>
          <div className="userprofile_form_item">
            <TextField
              size="small"
              label="Date de naissance"
            />
          </div>
          <div className="userprofile_form_item">
            <TextField
              size="small"
              label="Email"
            />
          </div>
          <div className="userprofile_form_item">
            <TextField
              size="small"
              label="Localisation"
            />
          </div>
          <FormControl fullWidth className="searchbar_form_item_service" size="small">
            <InputLabel>Sexe</InputLabel>
            <Select
              label="Sexe"
              value=""
            >
              <MenuItem value={1}>Homme</MenuItem>
              <MenuItem value={2}>Femme</MenuItem>
              <MenuItem value={3}>Ne préfère pas répondre</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="userprofile_inputs">
          <div className="userprofile_input_skills_edit">
            <TextField
              fullWidth
              rows={2}
              multiline
              label="Compétences"
            />
          </div>
          <div className="userprofile_input_description_edit">
            <TextField
              fullWidth
              rows={10}
              multiline
              label="Description"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
