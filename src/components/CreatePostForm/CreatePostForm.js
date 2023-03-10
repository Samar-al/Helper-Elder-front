/* eslint-disable max-len */
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  typeContent,
  typeRate,
  typeTitle,
  typeZipcode,
  selectPonctual,
  selectService,
  typeRadius,
  submitNewPost,
  createPostThrowErrors,
  createPostFormClear,
} from '../../actions/createpostform';
import './styles.scss';
import {
  hourlyRateTypeRegex,
  radiusTypeRegex,
  zipcodeRegex,
  zipcodeTypeRegex,
} from '../../utils/regex';
import FormErrors from '../FormErrors/FormErrors';

export default function CreatePostForm() {
  const {
    titleInput,
    zipcodeInput,
    contentInput,
    rateInput,
    radiusInput,
    selectedPonctual,
    selectedServices,
    errors,
  } = useSelector((state) => state.createpostform);
  const { user } = useSelector((state) => state.authentication);
  const { serviceList } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  function validatePost() {
    const formErrors = [];
    if (titleInput.trim().length < 1 || titleInput.trim().length > 255) formErrors.push('Le titre doit contenir entre 1 et 255 caractères.');
    if (contentInput.trim().length < 100 || titleInput.trim().length > 500) formErrors.push('Le contenu de l\'annonce doit contenir entre 100 et 500 caractères.');
    if (Number(rateInput) > 500) formErrors.push('Le tarif horaire ne doit pas dépasser 500€.');
    if (!['true', 'false'].includes(selectedPonctual)) formErrors.push('Veuillez indiquer si le service est pontuel ou régulier.');
    if (!zipcodeRegex.test(zipcodeInput)) formErrors.push('Veuillez entrer un code postal valide à 5 chiffres.');
    if (Number(radiusInput) > 999) formErrors.push('Le rayon géographique ne doit pas dépasser 999km.');
    if (selectedServices.length === 0) formErrors.push('Veuillez sélectionner au moins un type de service.');

    dispatch(createPostThrowErrors(formErrors));
    if (formErrors.length !== 0) {
      return false;
    }

    return {
      user_id: user.id,
      title: titleInput,
      content: contentInput,
      hourly_rate: Number(rateInput),
      work_type: selectedPonctual,
      postal_code: zipcodeInput,
      radius: Number(radiusInput),
      tag: selectedServices,
    };
  }

  function submitForm(e) {
    e.preventDefault();
    const post = validatePost();
    if (post) dispatch(submitNewPost(post));
  }

  useEffect(
    () => () => dispatch(createPostFormClear()),
    [],
  );

  return (
    <div className="create_post">
      {errors.length !== 0 && <FormErrors errors={errors} />}
      <div className="create_post_header">
        <h1 className="create_post_header_title">Poster une annonce</h1>
      </div>
      <form className="form" onSubmit={(e) => submitForm(e)}>
        {/* <div className="form_radio"> // TODO let the user decide if they are posting an offer or request
          <RadioGroup name="radio_button_group" value={selectedTypeUser} onChange={(event) => dispatch(selectTypeUser(event.target.value))}>
            <FormControlLabel value={1} control={<Radio />} label="Je suis un Elder (je cherche de l'aide)" />
            <FormControlLabel value={2} control={<Radio />} label="Je suis un Helper (je propose de l'aide)" />
          </RadioGroup>
        </div> */}
        <div className="form_input">
          <TextField
            required
            className="form_input_title"
            label="Titre de l'annonce"
            value={titleInput}
            size="small"
            onChange={(event) => dispatch(typeTitle(event.target.value))}
          />
        </div>
        <div className="form_radio">
          <RadioGroup row name="radio_button_group" value={selectedPonctual} onChange={(event) => dispatch(selectPonctual(event.target.value))}>
            <FormControlLabel value="true" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Service ponctuel" />
            <FormControlLabel value="false" control={<Radio sx={{ '&.Mui-checked': { color: '#104b4d' } }} />} label="Service régulier" />
          </RadioGroup>
        </div>
        <div className="form_input">
          <FormControl fullWidth className="searchbar_form_item_service" size="small">
            <InputLabel>Type de service</InputLabel>
            <Select
              multiple
              label="Type de service"
              value={selectedServices}
              onChange={(e) => dispatch(selectService(e.target.value))}
              /* Here we need to build a string with all the selected services separated by a ",".
                 The thing is, we need to put the checkboxes values as IDs to be able to pass those
                 to the API. Thus, selected is an array of numbers.
                 First, an array containing the services names as strings is made with
                 selected.map((serviceId) => serviceList.find((service) => service.id === serviceId).name)
                 Then, this array is turned into a string with all the selected services names
                 separated by a coma with .reduce((render, service) => `${render}, ${service}`)
                 */
              renderValue={(selected) => {
                const serviceNameArray = selected.map((serviceId) => serviceList.find((service) => service.id === serviceId).name);
                return serviceNameArray.reduce((render, service) => `${render}, ${service}`);
              }}
            >
              {/* short circuit evaluation to prevent errors.
              The list is not created as long as services are not loaded */}
              {serviceList && serviceList.map((service) => (
                <MenuItem key={service.name} value={service.id}>
                  <Checkbox sx={{ '&.Mui-checked': { color: '#104b4d' } }} checked={selectedServices.includes(service.id)} />
                  <ListItemText primary={service.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form_input">
          <TextField
            required
            className="form_input_zipcode"
            label="Code postal"
            value={zipcodeInput}
            size="small"
            onChange={(event) => {
              if (zipcodeTypeRegex.test(event.target.value)) dispatch(typeZipcode(event.target.value));
            }}
          />
        </div>
        <div className="form_input">
          <TextField
            className="form_input_radius"
            label="Rayon"
            value={radiusInput}
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            onChange={(event) => {
              if (radiusTypeRegex.test(event.target.value)) dispatch(typeRadius(event.target.value));
            }}
          />
        </div>
        <div className="form_input">
          <TextField
            required
            rows={6}
            className="form_input_content"
            multiline
            label="Contenu de l'annonce"
            value={contentInput}
            onChange={(event) => dispatch(typeContent(event.target.value))}
          />
        </div>
        <div className="form_input">
          <TextField
            label="Tarif"
            value={rateInput}
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>,
            }}
            onChange={(event) => {
              if (hourlyRateTypeRegex.test(event.target.value)) dispatch(typeRate(event.target.value));
            }}
          />
        </div>
        <div className="create_button">
          <Button type="submit" variant="contained">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}
