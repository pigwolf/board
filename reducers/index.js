import { combineReducers } from 'redux';

import isLoading from './is_loading';
import offer from './offer';
import offerCreated from './offer_created';
import offerPage from './offer_page';
import recaptchaToken from './recaptcha_token';

export default combineReducers({
  isLoading,
  offer,
  offerCreated,
  offerPage,
  recaptchaToken,
});
