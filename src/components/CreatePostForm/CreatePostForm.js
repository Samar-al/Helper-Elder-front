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

import { useDispatch, useSelector } from 'react-redux';
import {
  typeContent,
  typeRate,
  typeTitle,
  typeZipcode,
  selectPonctual,
  selectService,
  selectTypeUser,
  typeRadius,
  submitNewPost,
} from '../../actions/createpostform';
import './styles.scss';
import { hourlyRateRegex, radiusRegex, zipcodeRegex } from '../../utils/regex';

export default function CreatePostForm() {
  const {
    titleInput,
    zipcodeInput,
    contentInput,
    rateInput,
    radiusInput,
    selectedPonctual,
    selectedServices,
    selectedTypeUser,
  } = useSelector((state) => state.createpostform);

  const { user } = useSelector((state) => state.authentication);

  const { serviceList } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  function submitForm(e) {
    e.preventDefault();
    const post = {
      user_id: user.id,
      title: titleInput,
      content: contentInput,
      hourly_rate: rateInput,
      work_type: selectedPonctual,
      postal_code: zipcodeInput,
      radius: Number(radiusInput),
      tag: selectedServices,
    };
    dispatch(submitNewPost(post));
  }

  return (
    <div className="create_post">
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
            className="form_input_title"
            label="Titre de l'annonce"
            value={titleInput}
            size="small"
            onChange={(event) => dispatch(typeTitle(event.target.value))}
          />
        </div>
        <div className="form_radio">
          <RadioGroup row name="radio_button_group" value={selectedPonctual} onChange={(event) => dispatch(selectPonctual(event.target.value))}>
            <FormControlLabel value="true" control={<Radio />} label="Service ponctuel" />
            <FormControlLabel value="false" control={<Radio />} label="Service régulier" />
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
                  <Checkbox checked={selectedServices.includes(service.id)} />
                  <ListItemText primary={service.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form_input">
          <TextField
            className="form_input_zipcode"
            label="Code postal"
            value={zipcodeInput}
            size="small"
            onChange={(event) => {
              if (zipcodeRegex.test(event.target.value)) dispatch(typeZipcode(event.target.value));
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
              if (radiusRegex.test(event.target.value)) dispatch(typeRadius(event.target.value));
            }}
          />
        </div>
        <div className="form_input">
          <TextField
            rows={10}
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
              if (hourlyRateRegex.test(event.target.value)) dispatch(typeRate(event.target.value));
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
