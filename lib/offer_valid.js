'use strict';

exports = module.exports = offerIsValid;
exports.companyDataIsValid = companyDataIsValid;
exports.isEmail = isEmail;

function offerIsValid(offer) {
  return companyDataIsValid(offer)
    && isEmail(offer.email)
    && !!offer.telephone
    && !!offer.name
    && offer.acceptsPrivacy === true;
}

function companyDataIsValid(data) {
  const isNumber = n => typeof n === 'number';
  return isNumber(data.intention)
    && isNumber(data.industry)
    && isNumber(data.workforce)
    && isNumber(data.companyType);
}

function isEmail(s) {
  return !!s.match(/^[^@]+@[^@]+$/);
}
