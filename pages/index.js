import React from 'react';
import Head from 'next/head';
import { useModal } from '../component/modal';
import DemoForm from './demo';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonBox = styled(Button)(() => ({
  marginLeft: 10,
  marginTop: 10
}));

const Home = () => {
  const modal = useModal();
  const Form = () => {
    modal({
      fullWidth: true,
      title: 'Add New Document Details',
      showClose: true,
      description: <DemoForm />
    });
  };

  return (
    <React.Fragment >
      <Head>
        <title>Demo Form</title>
      </Head>
      <ButtonBox variant="contained" color="error" onClick={() => Form()}>
        Add New
      </ButtonBox>
    </React.Fragment>
  );
};
export default Home;
