import { CHANGE_OFFER_PAGE } from 'actions/offer_page';
import { NEW_OFFER, RESET_OFFER } from 'actions/offer';

export default function offerPage(state = 'company_data', action) {
  switch (action.type) {
    case CHANGE_OFFER_PAGE:
      return action.page;
    case NEW_OFFER:
    case RESET_OFFER:
      return 'company_data';
    default:
      return state;
  }
}
