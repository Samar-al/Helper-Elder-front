/* eslint-disable max-len */
import './styles.scss';
import {
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  profileEditTypeFirstname,
  profileEditTypeLastname,
  profileEditTypeBirthdate,
  profileEditTypeEmail,
  profileEditTypePostalCode,
  profileEditSelectGender,
  profileEditTypeDescription,
  submitUserChanges,
  fillUserEditForm,
} from '../../actions/userprofile';

import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import { zipcodeTypeRegex, birthdateTypeRegex } from '../../utils/regex';
import { formatDateForApi } from '../../utils/functions';

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

  useEffect(() => {
    dispatch(fillUserEditForm(user));
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const updatedUser = {
      id: user.id,
      firstname: firstnameInput,
      lastname: lastnameInput,
      birthdate: formatDateForApi(birthdateInput),
      email: emailInput,
      postal_code: postalCodeInput,
      gender: selectedGender,
      description: descriptionInput,
    };
    dispatch(submitUserChanges(updatedUser));
  }

  return (
    <div className="userprofile">
      <div className="userprofile_info_media">
        <img className="userprofile_picture" alt="userprofile" src={user.picture ? user.picture : avatarPlaceholder} />
      </div>
      <div className="userprofile_info_text">
        <form onSubmit={(event) => submitForm(event)}>
          <div className="userprofile_button_modify">
            <Button type="submit" variant="contained">Enregistrer</Button>
          </div>
          <div className="userprofile_info_text_paragraph_edit">
            <div className="userprofile_form_item">
              <TextField
                fullWidth
                size="small"
                label="Prénom"
                value={firstnameInput}
                onChange={(event) => dispatch(profileEditTypeFirstname(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                fullWidth
                size="small"
                label="Nom"
                value={lastnameInput}
                onChange={(event) => dispatch(profileEditTypeLastname(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                fullWidth
                size="small"
                label="Date de naissance"
                value={birthdateInput}
                onChange={(event) => {
                  if (birthdateTypeRegex.test(event.target.value)) dispatch(profileEditTypeBirthdate(event.target.value));
                }}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                fullWidth
                size="small"
                label="Email"
                value={emailInput}
                onChange={(event) => dispatch(profileEditTypeEmail(event.target.value))}
              />
            </div>
            <div className="userprofile_form_item">
              <TextField
                fullWidth
                size="small"
                label="Localisation"
                value={postalCodeInput}
                onChange={(event) => {
                  if (zipcodeTypeRegex.test(event.target.value)) dispatch(profileEditTypePostalCode(event.target.value));
                }}
              />
            </div>
            <FormControl size="small">
              <InputLabel>Sexe</InputLabel>
              <Select
                label="Sexe"
                value={selectedGender}
                onChange={(e) => dispatch(profileEditSelectGender(e.target.value))}
              >
                <MenuItem value={1}>Homme</MenuItem>
                <MenuItem value={2}>Femme</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="userprofile_input">
            <div className="userprofile_input_description_edit">
              <TextField
                fullWidth
                multiline
                label="Description"
                value={descriptionInput}
                onChange={(event) => dispatch(profileEditTypeDescription(event.target.value))}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
