import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import './styles.scss';

export default function CreatePostForm() {
  return (
    <div className="create_post">
      <h1>Poster une annonce</h1>
      <Box component="form">
        <TextField label="Titre de l'annonce" variant="outlined" />
        <div className="form_radio">
          <RadioGroup row name="radio_button_group">
            <FormControlLabel value="ponctual" control={<Radio />} label="Service ponctuel" />
            <FormControlLabel value="regular" control={<Radio />} label="Service régulier" />
          </RadioGroup>
        </div>
        <TextField label="Code postal" variant="outlined" />
        <TextField className="form_content" label="Contenu de l'annonce" variant="outlined" />
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
        <TextField label="Tarif" variant="outlined" />
      </Box>
      <div className="create_button">
        <Button variant="contained">Envoyer</Button>
      </div>
    </div>
  );
}
