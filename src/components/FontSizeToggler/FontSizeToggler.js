import './styles.scss';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSize } from '../../actions/app';
import { AntSwitch } from './AntSwitch';

export default function FontSizeToggler() {
  const dispatch = useDispatch();
  const { largeFontSize } = useSelector((state) => state.app);

  return (
    <div className="fontsizetoggler">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <Stack
            onChange={(e) => {
              dispatch(changeFontSize());
            }}
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Typography>t</Typography>
            <AntSwitch checked={largeFontSize} />
            <Typography>T</Typography>
          </Stack>
        </FormGroup>
      </FormControl>
    </div>
  );
}
