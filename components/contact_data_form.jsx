import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import offerIsValid from 'lib/offer_valid';
import ContactInputs from './contact_inputs';
import Recaptcha from './recaptcha';

export default function ContactDataForm(props) {
  return (
    <div className="form">
      <ol className="breadcrumb">
        <li>
          <Link to="/">Intention</Link>
        </li>
        <li className="active">
          <a
            href="#"
            onClick={props.onClickCompanyDataLink}
          >
            Daten
          </a>
        </li>
        <li className="active">
          Kontakt
        </li>
      </ol>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="alert alert-info">
            <p>
              So, Sie haben es fast geschafft. Wir brauchen nur noch einen Kontakt zu Ihnen.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
          <ContactInputs
            name={props.offer.name}
            email={props.offer.email}
            telephone={props.offer.telephone}
            onChangeName={props.onChangeOfferName}
            onChangeEmail={props.onChangeOfferEmail}
            onChangeTelephone={props.onChangeOfferTelephone}
          />
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="control-label">Bemerkungen</label>
            <textarea
              placeholder="Sie wollen etwas loswerden? Zögern Sie nicht."
              rows="8"
              className="form-control"
              value={props.offer.notes}
              onChange={props.onChangeOfferNotes}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="form-group">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={props.offer.acceptsPrivacy}
                  onChange={props.onChangeOfferAcceptsPrivacy}
                />
                Ich akzeptiere die geltenden <a target="_blank" href="//www.pigwolf.com/privacy">
                  Datenschutzbedingungen
                </a>.
              </label>
            </div>
          </div>
          {props.recaptchaHidden
            ? null
          : (
            <Recaptcha
              sitekey={props.recaptchaSitekey}
              onSolve={props.onSolveRecaptcha}
            />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <hr />
          <button
            className={`btn btn-${props.isLoading ? 'warning' : 'success'}`}
            disabled={
              props.recaptchaToken == null || !offerIsValid(props.offer) || props.isLoading
            }
            onClick={props.onClickSubmit}
          >
            {!props.isLoading
              ? <span><i className="fa fa-check" /> Angebot einholen</span>
            : <span><i className="fa fa-cog fa-spin" /> Übermittle Daten</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

ContactDataForm.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    acceptsPrivacy: PropTypes.bool.isRequired,
    notes: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  recaptchaSitekey: PropTypes.string.isRequired,
  recaptchaToken: PropTypes.string,
  recaptchaHidden: PropTypes.bool,
  onChangeOfferName: PropTypes.func.isRequired,
  onChangeOfferEmail: PropTypes.func.isRequired,
  onChangeOfferTelephone: PropTypes.func.isRequired,
  onChangeOfferAcceptsPrivacy: PropTypes.func.isRequired,
  onChangeOfferNotes: PropTypes.func.isRequired,
  onSolveRecaptcha: PropTypes.func.isRequired,
  onClickCompanyDataLink: PropTypes.func.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
};
