import React, { PropTypes } from 'react';

import OfferResetDialog from './offer_reset_dialog';
import Footer from './footer';

export default function App(props) {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__background" />
        <div className="app__logo-container">
          <a href="//www.pigwolf.com">
            <img className="app__logo" src="/logo-dark.png" />
          </a>
        </div>
        <h1 className="page-header app__title">
          Beratung und Dienstleistung
        </h1>
      </header>
      <div className="app__body container">
        {props.offerCreated ? <OfferResetDialog /> : null}
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  offerCreated: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};
