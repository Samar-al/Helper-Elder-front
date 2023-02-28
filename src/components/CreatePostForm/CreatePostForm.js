import {
  Box,
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
  typeRate, typeTitle,
  typeZipcode,
  selectPonctual,
  selectService,
  selectTypeUser,
  typeRadius,
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
    selectedService,
    selectedTypeUser,
  } = useSelector((state) => state.createpostform);

  const { serviceList } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  function submitForm() {
    const post = {
      user_id: "",
      title: titleInput,
      content: contentInput,
      hourly_rate: rateInput,
      work_type: selectedPonctual,
      postal_code: zipcodeInput,
      radius: radiusInput,
    };
    console.log(post);
  }

  return (
    <div className="create_post">
      <div className="create_post_header">
        <h1 className="create_post_header_title">Poster une annonce</h1>
      </div>
      <Box component="form">
        <div className="form_radio">
          <RadioGroup name="radio_button_group" value={selectedTypeUser} onChange={(event) => dispatch(selectTypeUser(event.target.value))}>
            <FormControlLabel value="elder" control={<Radio />} label="Je suis un Elder (je cherche de l'aide)" />
            <FormControlLabel value="helper" control={<Radio />} label="Je suis un Helper (je propose de l'aide)" />
          </RadioGroup>
        </div>
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
              rows={2}
              label="Type de service"
              value={selectedService}
              onChange={(e) => dispatch(selectService(e.target.value))}
              renderValue={(selected) => selected.join(', ')}
            >
              {/* short circuit evaluation to prevent errors.
              The list is not created as long as services are not loaded */}
              {serviceList && serviceList.map((service) => (
                <MenuItem key={service.name} value={service.id}>
                  <Checkbox checked={selectedService.includes(service.name)} />
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
      </Box>
      <div className="create_button">
        <Button onClick={() => submitForm()} variant="contained">Envoyer</Button>
      </div>
    </div>
  );
}
