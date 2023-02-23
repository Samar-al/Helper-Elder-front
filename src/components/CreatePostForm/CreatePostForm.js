import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  typeContent, typeRate, typeTitle, typeZipcode, selectRadio, selectService, selectTypeUser,
} from '../../actions/createpostform';
import './styles.scss';
import services from './data';

export default function CreatePostForm() {
  const {
    titleInput,
    zipcodeInput,
    contentInput,
    rateInput,
    selectedRadio,
    selectedService,
    selectedTypeUser,
  } = useSelector((state) => state.createpostform);

  const dispatch = useDispatch();

  return (
    <div className="create_post">
      <div className="create_post_header">
        <h1 className="create_post_header_title">Poster une annonce</h1>
        <Switch />
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
            onChange={(event) => dispatch(typeTitle(event.target.value))}
          />
        </div>
        <div className="form_radio">
          <RadioGroup row name="radio_button_group" value={selectedRadio} onChange={(event) => dispatch(selectRadio(event.target.value))}>
            <FormControlLabel value="ponctual" control={<Radio />} label="Service ponctuel" />
            <FormControlLabel value="regular" control={<Radio />} label="Service régulier" />
          </RadioGroup>
        </div>
        <div className="form_input">
          <TextField
            className="form_input_zipcode"
            label="Code postal"
            value={zipcodeInput}
            onChange={(event) => {
              const regex = /^\d{0,5}$/; // <= match un nombre contenant 0 à 5 chiffre ("" passe le test)
              if (regex.test(event.target.value)) dispatch(typeZipcode(event.target.value));
            }} // TODO A changer avec variable dans utils
          />
        </div>
        <div className="form_input">
          <TextField
            rows={10}
            className="form_input_content"
            multiline="true"
            label="Contenu de l'annonce"
            value={contentInput}
            onChange={(event) => dispatch(typeContent(event.target.value))}
          />
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
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  <Checkbox checked={selectedService.includes(service)} />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form_input">
          <TextField
            label="Tarif en €"
            value={rateInput}
            onChange={(event) => {
              const rateRegex = /^\d{0,}(,\d{0,2})?$/;
              /*
                ^ means the start of the string
                \d means a digit
                {0,} means one or more
                () with a question mark
                ? means: match what is inside the group one or no times
                , is the comma you wrote
                \d is still a digit
                {0,2} means match the previous digit one or two times
                $ matches the end of the string
              */
              if (rateRegex.test(event.target.value)) dispatch(typeRate(event.target.value));
            }} // TODO A changer avec variable dans utils
          />
        </div>
      </Box>
      <div className="create_button">
        <Button variant="contained">Envoyer</Button>
      </div>
    </div>
  );
}
