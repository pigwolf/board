import { CREATE_OFFER_SUCCESS, RESET_OFFER } from 'actions/offer';

export default function offerCreated(state = false, action) {
  switch (action.type) {
    case CREATE_OFFER_SUCCESS:
      return true;
    case RESET_OFFER:
      return false;
    default:
      return state;
  }
}
