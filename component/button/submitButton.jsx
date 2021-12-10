import { Button } from '@mui/material';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const CircularProgress = styled(MuiCircularProgress)(() => ({
  marginLeft: 10
}));

const ButtonBox = styled(Button)(() => ({
  marginTop: 10
}));

const SubmitButton = ({ title, loading, variant, color, type }) =>
  <ButtonBox variant={variant} color={color} type={type}>
    {title}
    {loading && <CircularProgress color="inherit" size={20} />}
  </ButtonBox>;

export default SubmitButton;
