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
import './styles.scss';

export default function CreatePostForm() {
  return (
    <div className="create_post">
      <div className="create_post_header">
        <h1 className="create_post_header_title">Poster une annonce</h1>
        <Switch />
      </div>
      <Box component="form">
        <div className="form_radio">
          <RadioGroup row name="radio_button_group">
            <FormControlLabel value="ponctual" control={<Radio />} label="Je suis un Elder (je cherche de l'aide)" />
            <FormControlLabel value="regular" control={<Radio />} label="Je suis un Helper (je propose de l'aide)" />
          </RadioGroup>
        </div>
        <div className="form_input">
          <TextField className="form_input_title" label="Titre de l'annonce" variant="outlined" />
        </div>
        <div className="form_radio">
          <RadioGroup row name="radio_button_group">
            <FormControlLabel value="ponctual" control={<Radio />} label="Service ponctuel" />
            <FormControlLabel value="regular" control={<Radio />} label="Service régulier" />
          </RadioGroup>
        </div>
        <div className="form_input">
          <TextField className="form_input_zipcode" label="Code postal" variant="outlined" />
        </div>
        <div className="form_input">
          <TextField rows={10} className="form_input_content" multiline="true" label="Contenu de l'annonce" variant="outlined" />
        </div>
        <FormGroup>
          <h2 className="form_content_title">Services attendus ou proposés</h2>
          <FormControlLabel control={<Checkbox />} label="Chauffeur" />
          <FormControlLabel control={<Checkbox />} label="Courses" />
          <FormControlLabel control={<Checkbox />} label="Ménage" />
          <FormControlLabel control={<Checkbox />} label="Compagnie" />
          <FormControlLabel control={<Checkbox />} label="Toilette" />
          <FormControlLabel control={<Checkbox />} label="Cuisine" />
          <FormControlLabel control={<Checkbox />} label="Soins médicaux (qualification requise)" />
          <FormControlLabel control={<Checkbox />} label="Aide au bain/ Habillage (qualification requise)" />
        </FormGroup>
        <div className="form_input">
          <TextField label="Tarif" variant="outlined" />
        </div>
      </Box>
      <div className="create_button">
        <Button variant="contained">Envoyer</Button>
      </div>
    </div>
  );
}
