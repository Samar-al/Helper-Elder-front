/* eslint-disable max-len */
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
import { zipcodeTypeRegex } from '../../utils/regex';
import FontSizeToggler from '../FontSizeToggler/FontSizeToggler';
import { searchPosts } from '../../actions/resultposts';

export default function Searchbar() {
  const { adressInput, selectedServices, postType } = useSelector((state) => state.searchbar);
  const dispatch = useDispatch();
  const { serviceList } = useSelector((state) => state.app);
  // const { valueSearchBar } = useSelector((state) => state.post);

  return (
    <div className="searchbar">
      <div className="searchbar_label">Je cherche une</div>
      <form
        className="searchbar_form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(searchPosts());
        }}
      >
        <div className="searchbar_form_item">
          <FormControl fullWidth className="searchbar_form_item_type" size="small">
            <InputLabel>Offre/Demande</InputLabel>
            <Select
              label="Offre/Demande"
              value={postType}
              onChange={(e) => {
                dispatch(selectPostType(e.target.value));
              }}
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
                // match un nombre contenant 0 à 5 chiffres ("" passe le test)
                if (zipcodeTypeRegex.test(e.target.value)) dispatch(typeAdress(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="searchbar_form_button">
          <Button type="submit" variant="contained">Rechercher</Button>
        </div>
      </form>
      <FontSizeToggler />
    </div>
  );
}
