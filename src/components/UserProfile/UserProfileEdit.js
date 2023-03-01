/* eslint-disable max-len */
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

import { useDispatch, useSelector } from 'react-redux';
import {
  typeFirstname,
  typeLastname,
  typeBirthdate,
  typeEmail,
  typePostalCode,
  selectGender,
  typeDescription,
  submitUserChanges,
} from '../../actions/userprofile';

import userinfo from './data'; // data temporaires
import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { zipcodeRegex } from '../../utils/regex';

export default function UserProfile() {
  const {
    firstnameInput,
    lastnameInput,
    birthdateInput,
    emailInput,
    postalCodeInput,
    selectedGender,
    descriptionInput,
  } = useSelector((state) => state.userprofile);

  const { user } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  function submitForm() {
    const post = {
      user_id: user.id,
      firstname: firstnameInput,
      lastname: lastnameInput,
      birthdate: birthdateInput,
      email: emailInput,
      postal_code: postalCodeInput,
      gender: selectedGender,
      dscription: descriptionInput,
    };
    dispatch(submitUserChanges(post));
  }
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
      <form onSubmit={submitForm()}>
        <div className="userprofile_info_text">
          <div className="userprofile_button_modify">
            <Button variant="contained">Enregistrer</Button>
          </div>
          <div className="userprofile_info_text_paragraph_edit">
            <div className="userprofile_form_item">
              <TextField
                size="small"
                label="Prénom"
                value={firstnameInput}
                onChange={(event) => dispatch(typeFirstname(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                size="small"
                label="Nom"
                value={lastnameInput}
                onChange={(event) => dispatch(typeLastname(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                size="small"
                label="Date de naissance"
                value={birthdateInput}
                onChange={(event) => dispatch(typeBirthdate(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                size="small"
                label="Email"
                value={emailInput}
                onChange={(event) => dispatch(typeEmail(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                size="small"
                label="Localisation"
                value={postalCodeInput}
                onChange={(event) => {
                  if (zipcodeRegex.test(event.target.value)) dispatch(typePostalCode(event.target.value));
                }}
              />
            </div>
            <FormControl fullWidth className="searchbar_form_item_service" size="small">
              <InputLabel>Sexe</InputLabel>
              <Select
                label="Sexe"
                value={selectedGender}
                onChange={(e) => dispatch(selectGender(e.target.value))}
              >
                <MenuItem value={1}>Homme</MenuItem>
                <MenuItem value={2}>Femme</MenuItem>
                <MenuItem value={3}>Ne préfère pas répondre</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="userprofile_inputs">
            <div className="userprofile_input_description_edit">
              <TextField
                fullWidth
                rows={10}
                multiline
                label="Description"
                onChange={(event) => dispatch(typeDescription(event.target.value))}
              />
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}
