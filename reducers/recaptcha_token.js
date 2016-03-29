import { CHANGE_RECAPTCHA_TOKEN } from 'actions/recaptcha_token';
import { NEW_OFFER, RESET_OFFER } from 'actions/offer';
import { CHANGE_OFFER_PAGE } from 'actions/offer_page';

export default function recaptchaToken(state = null, action) {
  switch (action.type) {
    case CHANGE_RECAPTCHA_TOKEN:
      return action.token;
    case CHANGE_OFFER_PAGE:
    case NEW_OFFER:
    case RESET_OFFER:
      return null;
    default:
      return state;
  }
}
