import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  typeContent, typeRate, typeTitle, typeZipcode, selectRadio, selectService, selectTypeUser,
} from '../../actions/createpostform';
import './styles.scss';

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
            onChange={(event) => dispatch(typeZipcode(event.target.value))}
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
        <FormGroup
          value={selectedService}
          onChange={(event) => dispatch(selectService(event.target.value))}
          renderValue={(selected) => selected.join(', ')} // TODO Les ajouter les uns à la suite des autres
        >
          <h2 className="form_content_title">Services attendus ou proposés</h2>
          <FormControlLabel control={<Checkbox />} label="Chauffeur" value="chauffeur" />
          <FormControlLabel control={<Checkbox />} label="Courses" value="courses" />
          <FormControlLabel control={<Checkbox />} label="Ménage" value="ménage" />
          <FormControlLabel control={<Checkbox />} label="Compagnie" value="compagnie" />
          <FormControlLabel control={<Checkbox />} label="Toilette" value="toilette" />
          <FormControlLabel control={<Checkbox />} label="Cuisine" value="cuisine" />
          <FormControlLabel control={<Checkbox />} label="Soins médicaux (qualification requise)" value="soins médicaux" />
          <FormControlLabel control={<Checkbox />} label="Aide au bain/ Habillage (qualification requise)" value="aide au bain" />
        </FormGroup>
        <div className="form_input">
          <TextField
            label="Tarif"
            value={rateInput}
            onChange={(event) => dispatch(typeRate(event.target.value))}
          />
        </div>
      </Box>
      <div className="create_button">
        <Button variant="contained">Envoyer</Button>
      </div>
    </div>
  );
}
