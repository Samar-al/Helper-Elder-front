/* eslint-disable max-len */
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

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

} from '../../actions/registration';
import './styles.scss';
import { zipcodeRegex, birthdateRegex } from '../../utils/regex';

export default function Registration() {
  const {
    firstnameInput,
    lastnameInput,
    birthdateInput,
    postalCodeInput,
    emailInput,
    passwordInput,
    descriptionInput,
    selectedTypeNewUser,
    selectedGender,
  } = useSelector((state) => state.registration);

  const dispatch = useDispatch();

  // function passwordValidation(event) {
  //   if ({ passwordInput } === { passwordConfirmationInput }) {
  //     return dispatch(typeNewUserPassword(event.target.value));
  //   }
  //   alert('Les deux mots de passe ne sont pas identiques');
  // }

  function submitForm(e) {
    e.preventDefault();
    const newUser = {
      firstname: firstnameInput,
      lastname: lastnameInput,
      birthdate: birthdateInput,
      postal_code: postalCodeInput,
      email: emailInput,
      password: passwordInput,
      gender: selectedGender,
      type: selectedTypeNewUser,
      description: selectedTypeNewUser === 1
        ? 'Je me suis inscrit-e sur le site helpers-elders afin de trouver une personne qui puisse m’aider dans mes tâches quotidiennes.'
        : 'Je me suis inscrit-e sur le site helpers-elders afin de proposer mes services à des personnes dans le besoin. ',
    };
    dispatch(submitNewUser(newUser));
    console.log(newUser);
  }

  return (
    <div className="registration">
      <div className="registration_header">
        <h1 className="registration_header_title">Créer un compte</h1>
      </div>
      <div className="registration_form">
        <form onSubmit={(e) => submitForm(e)}>
          <div className="registration_form_radio">
            <RadioGroup row name="radio_button_group" value={selectedTypeNewUser} onChange={(event) => dispatch(selectNewUserType(event.target.value))}>
              <FormControlLabel value="1" control={<Radio />} label="Je suis un ELDER (cherche de l'aide)" />
              <FormControlLabel value="2" control={<Radio />} label="Je suis un HELPER (propose de l'aide)" />
            </RadioGroup>
          </div>
          <div className="registration_form_radio">
            <RadioGroup row name="radio_button_group" value={selectedGender} onChange={(event) => dispatch(selectNewUserGender(event.target.value))}>
              <FormControlLabel value="1" control={<Radio />} label="Homme" />
              <FormControlLabel value="2" control={<Radio />} label="Femme" />
            </RadioGroup>
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_lastname"
              label="Nom"
              value={lastnameInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserLastname(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_firstname"
              label="Prénom"
              value={firstnameInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserFirstname(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_birthdate"
              label="Date de naissance (JJ/MM/AAAA)"
              value={birthdateInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserBirthdate(event.target.value))}
            />

            {/* onChange={(event) => {
                if (birthdateRegex.test(event.target.value)) dispatch(typeNewUserBirthdate(event.target.value));
              }}
            /> */}
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_postalcode"
              label="Code postal"
              value={postalCodeInput}
              size="small"
              onChange={(event) => {
                if (zipcodeRegex.test(event.target.value)) dispatch(typeNewUserPostalCode(event.target.value));
              }}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_email"
              type="email"
              label="Email"
              value={emailInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserEmail(event.target.value))}
            />
          </div>
          <div className="registration_form_input">
            <TextField
              className="registration_form_input_password"
              type="password"
              label="Mot de passe"
              value={passwordInput}
              size="small"
              onChange={(event) => dispatch(typeNewUserPassword(event.target.value))}
            />
          </div>
          {/* <div className="registration_form_input">
            <TextField
              className="registration_form_input_password"
              label="Confirmer votre mot de passe"
              value={passwordConfirmationInput}
              size="small"
            />
          </div> */}
          {/* <div className="registration_form_input">
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
