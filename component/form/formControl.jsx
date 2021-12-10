import MuiFormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const FormControl = styled(MuiFormControl)(({ fullWidth }) => ({
  marginBottom: 10,
  marginTop: 2.5,
  ...(!fullWidth && {
    width: '50%',
    paddingLeft: 5,
    paddingRight: 5
  })
}));

export default FormControl;