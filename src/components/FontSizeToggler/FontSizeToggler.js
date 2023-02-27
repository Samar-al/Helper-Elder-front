import './styles.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSize } from '../../actions/app';


export default function FontSizeToggler() {

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#104b4d' : '#104b4d',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const dispatch = useDispatch();
const {largeFontSize} = useSelector ((state) => state.app);

  return (
    <div className="fontsizetoggler">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <Stack 
            onChange={(e) => {
              console.log(e.target.value);
              dispatch(changeFontSize())} } 
            direction="row" 
            spacing={1} 
            alignItems="center"
          >
            <Typography>t</Typography>
            <AntSwitch checked={ largeFontSize } />
            <Typography>T</Typography>
          </Stack>
        </FormGroup>
      </FormControl>
    </div>
  );
}

