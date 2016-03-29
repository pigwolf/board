import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import industries from 'lib/industries';
import workforces from 'lib/workforces';
import onlineMedia from 'lib/online_media';
import companyTypes from 'lib/company_types';
import { companyDataIsValid } from 'lib/offer_valid';

export default function CompanyDataForm(props) {
  return (
    <div className="form">
      <ol className="breadcrumb">
        <li>
          <Link to="/">Intention</Link>
        </li>
        <li className="active">
          Daten
        </li>
      </ol>
      <div className="row">
        <div className="col-md-offset-2 col-md-4">
          <div className="form-group">
            <label className="control-label">Intention</label>
            <select
              value={
                props.offer.intention != null
                  ? props.offer.intention.toString()
                  : ''
              }
              className="form-control"
              onChange={props.onChangeOfferIntention}
            >
              <option value="1">Kunden finden</option>
              <option value="2">Bewerber finden</option>
              <option value="3">Kundeninteraktion</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">Branche Ihres Unternehmens</label>
            <select
              value={
                props.offer.industry != null
                  ? props.offer.industry.toString()
                  : ''
              }
              className="form-control"
              onChange={props.onChangeOfferIndustry}
            >
              <option value="">Bitte wählen ...</option>
              {industries.map((industry, i) =>
                <option value={i.toString()} key={i}>{industry}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">Mitarbeiteranzahl</label>
            <select
              className="form-control"
              value={
                props.offer.workforce != null
                  ? props.offer.workforce.toString()
                  : ''
              }
              onChange={props.onChangeOfferWorkforce}
            >
              <option value="">Bitte wählen ...</option>
              {workforces.map((workforce, i) =>
                <option value={i.toString()} key={i}>{workforce}</option>
              )}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="control-label">Bisher genutzte Online Medien</label>
            {onlineMedia.map((onlineMedium, i) =>
              <div key={i} className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={props.offer.onlineMedia.indexOf(i) !== -1}
                    value={i}
                    onChange={props.onChangeOfferOnlineMedia}
                  />
                {onlineMedium}
                </label>
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="control-label">
              Bietet das Unternehmen Produkte zum Verkauf oder Dienstleistungen an?
            </label>
            {companyTypes.map((companyType, i) =>
              <div className="radio" key={i}>
                <label>
                  <input
                    type="radio"
                    value={i}
                    checked={props.offer.companyType === i}
                    onChange={props.onChangeOfferCompanyType}
                  />
                  {companyType}
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <hr />
          <button
            className="btn btn-primary"
            onClick={props.onClickSave}
            disabled={!companyDataIsValid(props.offer)}
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

CompanyDataForm.propTypes = {
  offer: PropTypes.shape({
    intention: PropTypes.number.isRequired,
    industry: PropTypes.number,
    workforce: PropTypes.number,
    onlineMedia: PropTypes.array.isRequired,
    companyType: PropTypes.number,
  }).isRequired,
  onClickSave: PropTypes.func.isRequired,
  onChangeOfferIntention: PropTypes.func.isRequired,
  onChangeOfferIndustry: PropTypes.func.isRequired,
  onChangeOfferWorkforce: PropTypes.func.isRequired,
  onChangeOfferOnlineMedia: PropTypes.func.isRequired,
  onChangeOfferCompanyType: PropTypes.func.isRequired,
};
