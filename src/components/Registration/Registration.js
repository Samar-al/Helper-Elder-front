/* eslint-disable max-len */
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  typeNewUserLastname,
  typeNewUserFirstname,
  typeNewUserBirthdate,
  typeNewUserEmail,
  typeNewUserPassword,
  typeNewUserPostalCode,
  selectNewUserGender,
  selectNewUserType,
  submitNewUser,
  registrationFormThrowErrors,
  typeNewUserPasswordConfirmation,
  registrationFormClear,

} from '../../actions/registration';
import './styles.scss';
import {
  zipcodeTypeRegex,
  birthdateTypeRegex,
  zipcodeRegex,
  emailRegex,
  birthdateRegex,
  passwordRegex,
} from '../../utils/regex';
import { formatDateForApi } from '../../utils/functions';
import FormErrors from '../FormErrors/FormErrors';

export default function Registration() {
  const {
    firstnameInput,
    lastnameInput,
    birthdateInput,
    postalCodeInput,
    emailInput,
    passwordInput,
    passwordConfirmationInput,
    selectedTypeNewUser,
    selectedGender,
    errors,
  } = useSelector((state) => state.registration);

  const dispatch = useDispatch();

  function validateNewUser() {
    const formErrors = [];
    if (![1, 2].includes(selectedTypeNewUser)) formErrors.push('Veuillez selectionner un rôle valide (Elder ou Helper).');
    if (![1, 2].includes(selectedGender)) formErrors.push('Veuillez selectionner un genre.');
    if (firstnameInput.trim().length < 1 || firstnameInput.length > 60) formErrors.push('Le prénom doit contenir entre 1 et 60 caractères.');
    if (lastnameInput.trim().length < 1 || lastnameInput.length > 60) formErrors.push('Le nom doit contenir entre 1 et 60 caractères.');
    if (!zipcodeRegex.test(postalCodeInput)) formErrors.push('Veuillez entrer un code postal valide à 5 chiffres.');
    if (!emailRegex.test(emailInput)) formErrors.push('Veuillez entrer une adresse e-mail valide.');
    if (passwordInput !== passwordConfirmationInput) formErrors.push('Les deux mots de passe ne correspondent pas.');
    if (!passwordRegex.test(passwordInput)) formErrors.push('Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et comporter au moins 6 caractères.');
    if (!birthdateRegex.test(birthdateInput)) formErrors.push('Veuillez entrer une date de naissance valide (JJ/MM/AAAA).');

    dispatch(registrationFormThrowErrors(formErrors));
    if (formErrors.length !== 0) {
      return false;
    }

    return {
      firstname: firstnameInput.trim(),
      lastname: lastnameInput.trim(),
      birthdate: formatDateForApi(birthdateInput),
      postal_code: postalCodeInput,
      email: emailInput,
      password: passwordInput.trim(),
      gender: selectedGender,
      type: selectedTypeNewUser,
      description: selectedTypeNewUser === 1
        ? 'Je me suis inscrit-e sur le site helpers-elders afin de trouver une personne qui puisse m’aider dans mes tâches quotidiennes.'
        : 'Je me suis inscrit-e sur le site helpers-elders afin de proposer mes services à des personnes dans le besoin. ',
    };
  }

  function submitForm(e) {
    e.preventDefault();
    const newUser = validateNewUser();
    if (newUser) dispatch(submitNewUser(newUser));
  }

  useEffect(
    () => () => dispatch(registrationFormClear()),
    [],
  );

  return (
    <div className="registration">
      {errors.length !== 0 && <FormErrors errors={errors} />}
      <div className="registration_header">
        <h1 className="registration_header_title">Créer un compte</h1>
      </div>
      <div className="registration_form">
        <form onSubmit={(e) => submitForm(e)}>
          <div className="registration_form_radio">
            <RadioGroup row name="radio_button_group" value={selectedTypeNewUser} onChange={(event) => dispatch(selectNewUserType(event.target.value))}>
              <FormControlLabel value="1" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Je suis un ELDER (cherche de l'aide)" />
              <FormControlLabel value="2" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Je suis un HELPER (propose de l'aide)" />
            </RadioGroup>
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_lastname"
              label="Nom"
              value={lastnameInput}
              size="small"
              fullWidth
              onChange={(event) => dispatch(typeNewUserLastname(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_firstname"
              label="Prénom"
              value={firstnameInput}
              size="small"
              fullWidth
              onChange={(event) => dispatch(typeNewUserFirstname(event.target.value))}
            />
          </div>
          <div className="registration_form_radio">
            <RadioGroup row name="radio_button_group" value={selectedGender} onChange={(event) => dispatch(selectNewUserGender(event.target.value))}>
              <FormControlLabel value="1" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Homme" />
              <FormControlLabel value="2" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Femme" />
            </RadioGroup>
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_birthdate"
              label="Date de naissance (JJ/MM/AAAA)"
              value={birthdateInput}
              size="small"
              fullWidth
              onChange={(event) => {
                if (birthdateTypeRegex.test(event.target.value)) dispatch(typeNewUserBirthdate(event.target.value));
              }}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_postalcode"
              label="Code postal"
              value={postalCodeInput}
              size="small"
              fullWidth
              onChange={(event) => {
                if (zipcodeTypeRegex.test(event.target.value)) dispatch(typeNewUserPostalCode(event.target.value));
              }}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_email"
              type="email"
              label="Email"
              value={emailInput}
              size="small"
              fullWidth
              onChange={(event) => dispatch(typeNewUserEmail(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              required
              className="registration_form_input_password"
              type="password"
              label="Mot de passe"
              value={passwordInput}
              size="small"
              fullWidth
              onChange={(event) => dispatch(typeNewUserPassword(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              required
              fullWidth
              className="registration_form_input_password"
              label="Confirmer votre mot de passe"
              type="password"
              value={passwordConfirmationInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserPasswordConfirmation(event.target.value))}
            />
          </div>
          {/* Description Input
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_description"
              label="Description"
              value={descriptionInput}
              rows={5}
              multiline
              onChange={(event) => dispatch(typeNewUserDescription(event.target.value))}
            />
          </div> */}
          <div className="registration_create_button">
            <Button type="submit" variant="contained">Créer mon compte</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
