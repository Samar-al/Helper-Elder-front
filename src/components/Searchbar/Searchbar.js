import './styles.scss';
import FormControl from '@mui/material/FormControl';
import {
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { selectPostType, selectServices, typeAdress } from '../../actions/searchbar';
import services from './data';

export default function Searchbar() {
  const { adressInput, selectedServices, postType } = useSelector((state) => state.searchbar);
  const dispatch = useDispatch();

  return (
    <div className="searchbar">
      <div className="searchbar_label">Je cherche une</div>
      <form className="searchbar_form">
        <div className="searchbar_form_item">
          <FormControl fullWidth className="searchbar_form_item_type" size="small">
            <InputLabel>Offre/Demande</InputLabel>
            <Select
              label="Offre/Demande"
              value={postType}
              onChange={(e) => dispatch(selectPostType(e.target.value))}
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
              value={selectedServices}
              onChange={(e) => dispatch(selectServices(e.target.value))}
              renderValue={(selected) => selected.join(', ')}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  <Checkbox checked={selectedServices.includes(service)} />
                  <ListItemText primary={service} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* this additional div on top of "searchbar_form_item"
        is necessary to group the "à" with the input within the flexbox */}
        <div className="searchbar_form_wrapper">
          à
          <div className="searchbar_form_item">
            <TextField
              label="Code postal"
              size="small"
              value={adressInput}
              onChange={(e) => {
                const regex = /^\d{0,5}$/; // <= match un nombre contenant 0 à 5 chiffre ("" passe le test)
                if (regex.test(e.target.value)) dispatch(typeAdress(e.target.value));
              }}
            />
          </div>
        </div>
      </form>
      <div className="searchbar_button">
        <Button variant="contained">Rechercher</Button>
      </div>
    </div>
  );
}
