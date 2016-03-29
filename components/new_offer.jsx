import React, { PropTypes } from 'react';

import CompanyDataForm from './company_data_form';
import ContactDataForm from './contact_data_form';

export default function NewOffer(props) {
  return (
    <div className="new-offer">
      <div className="jumbotron">
        <h2>Herzlich willkommen</h2>
        <p>
          Wir freuen uns sehr auf eine Zusammenarbeit mit Ihnen. Geben Sie uns hier noch ein
          paar Angaben zu Ihrem Unternehmen. So können wir ein passendes Angebot nur für Sie
          erstellen. Datenschutz ist hierbei natürlich Ehrensache!
        </p>
      </div>
      {props.page === 'company_data'
        ? (
          <CompanyDataForm
            offer={props.offer}
            onClickSave={props.onClickSave}
            onChangeOfferIntention={props.onChangeOfferIntention}
            onChangeOfferIndustry={props.onChangeOfferIndustry}
            onChangeOfferWorkforce={props.onChangeOfferWorkforce}
            onChangeOfferOnlineMedia={props.onChangeOfferOnlineMedia}
            onChangeOfferCompanyType={props.onChangeOfferCompanyType}
          />
        )
      : null}
      {props.page === 'contact_data'
        ? (
          <ContactDataForm
            isLoading={props.isLoading}
            offer={props.offer}
            recaptchaSitekey={props.recaptchaSitekey}
            recaptchaToken={props.recaptchaToken}
            recaptchaHidden={props.offerCreated}
            onChangeOfferName={props.onChangeOfferName}
            onChangeOfferEmail={props.onChangeOfferEmail}
            onChangeOfferTelephone={props.onChangeOfferTelephone}
            onChangeOfferAcceptsPrivacy={props.onChangeOfferAcceptsPrivacy}
            onChangeOfferNotes={props.onChangeOfferNotes}
            onClickCompanyDataLink={props.onClickCompanyDataLink}
            onSolveRecaptcha={props.onSolveRecaptcha}
            onClickSubmit={props.onClickSubmit}
          />
        )
      : null}
    </div>
  );
}

NewOffer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.oneOf(['company_data', 'contact_data']).isRequired,
  offer: PropTypes.object.isRequired,
  offerCreated: PropTypes.bool.isRequired,
  recaptchaSitekey: PropTypes.string.isRequired,
  recaptchaToken: PropTypes.string,
  onClickSave: PropTypes.func.isRequired,
  onChangeOfferIntention: PropTypes.func.isRequired,
  onChangeOfferIndustry: PropTypes.func.isRequired,
  onChangeOfferWorkforce: PropTypes.func.isRequired,
  onChangeOfferOnlineMedia: PropTypes.func.isRequired,
  onChangeOfferCompanyType: PropTypes.func.isRequired,
  onChangeOfferName: PropTypes.func.isRequired,
  onChangeOfferEmail: PropTypes.func.isRequired,
  onChangeOfferTelephone: PropTypes.func.isRequired,
  onChangeOfferAcceptsPrivacy: PropTypes.func.isRequired,
  onChangeOfferNotes: PropTypes.func.isRequired,
  onClickCompanyDataLink: PropTypes.func.isRequired,
  onSolveRecaptcha: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
};
