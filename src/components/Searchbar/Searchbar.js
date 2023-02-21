import './styles.scss';
import FormControl from '@mui/material/FormControl';
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import services from './data';

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div className="searchbar_label">Je cherche une</div>
      <form className="searchbar_form">
        <div className="searchbar_form_item">
          <FormControl fullWidth className="searchbar_form_item_type" size="small">
            <InputLabel>Offre/Demande</InputLabel>
            <Select
              label="Offre/Demande"
              // value={type} // TODO a faire quand le state sera en place
              // onChange={} // TODO a faire quand le state sera en place
            >
              <MenuItem value="offer">Offre</MenuItem>
              <MenuItem value="request">Demande</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="searchbar_form_item">
          <FormControl fullWidth className="searchbar_form_item_service" size="small">
            <InputLabel>Type de service</InputLabel>
            <Select
              multiple
              label="Type de service"
              value={[]} // TODO a faire quand le state sera en place
              // onChange={handleChange} // TODO a faire quand le state sera en place
              // input={<OutlinedInput label="Tag" />} // TODO va falloit comprendre ce truc et si il est nécessaire
              renderValue={(selected) => selected.join(', ')}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  <Checkbox />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        à
        <div className="searchbar_form_item">
          <TextField label="Code postal" variant="outlined" size="small" />
        </div>
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}
