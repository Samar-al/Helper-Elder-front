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
  userEditFormThrowErrors,
} from '../../actions/userprofile';

import avatarPlaceholder from '../../../public/img/placeholders/avatar_placeholder.png';
import {
  zipcodeTypeRegex, birthdateTypeRegex, zipcodeRegex, emailRegex, birthdateRegex,
} from '../../utils/regex';
import { formatDateForApi } from '../../utils/functions';
import FormErrors from '../FormErrors/FormErrors';

export default function UserProfile() {
  const {
    firstnameInput,
    lastnameInput,
    birthdateInput,
    emailInput,
    postalCodeInput,
    selectedGender,
    descriptionInput,
    errors,
  } = useSelector((state) => state.userprofile);

  const { user } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillUserEditForm(user));
    return () => userEditFormThrowErrors([]);
  }, []);

  function validateUpdatedUser() {
    const formErrors = [];
    if (![1, 2].includes(selectedGender)) formErrors.push('Veuillez selectionner un genre.');
    if (firstnameInput.trim().length < 1 || firstnameInput.length > 60) formErrors.push('Le prénom doit contenir entre 1 et 60 caractères.');
    if (lastnameInput.trim().length < 1 || lastnameInput.length > 60) formErrors.push('Le nom doit contenir entre 1 et 60 caractères.');
    if (!zipcodeRegex.test(postalCodeInput)) formErrors.push('Veuillez entrer un code postal valide à 5 chiffres.');
    if (!emailRegex.test(emailInput)) formErrors.push('Veuillez entrer une adresse e-mail valide.');
    if (!birthdateRegex.test(birthdateInput)) formErrors.push('Veuillez entrer une date de naissance valide (JJ/MM/AAAA).');
    if (descriptionInput.trim().length < 100 || lastnameInput.length > 500) formErrors.push('La description doit contenir entre 100 et 500 caractères.');

    dispatch(userEditFormThrowErrors(formErrors));
    if (formErrors.length !== 0) {
      return false;
    }

    return {
      firstname: firstnameInput.trim(),
      lastname: lastnameInput.trim(),
      birthdate: formatDateForApi(birthdateInput),
      postal_code: postalCodeInput,
      email: emailInput,
      gender: selectedGender,
      description: descriptionInput.trim(),
    };
  }

  function submitForm(event) {
    event.preventDefault();
    const updatedUser = validateUpdatedUser();
    dispatch(submitUserChanges(updatedUser));
  }

  return (
    <>
      {errors.length !== 0 && <FormErrors errors={errors} />}
      <div className="userprofile">
        <div className="userprofile_info_media">
          <img className="userprofile_picture" alt="user avatar" src={user.picture || avatarPlaceholder} />
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
    </>
  );
}
