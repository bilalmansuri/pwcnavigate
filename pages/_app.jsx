import '../styles/globals.css';
import PropTypes from 'prop-types';
import React from 'react';
import { ModalProvider } from '../component/modal/index';
function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
};

export default MyApp;
