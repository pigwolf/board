import { CREATE_OFFER, CREATE_OFFER_SUCCESS } from 'actions/offer';

export default function isLoading(state = false, action) {
  switch (action.type) {
    case CREATE_OFFER:
      return true;
    case CREATE_OFFER_SUCCESS:
      return false;
    default:
      return state;
  }
}
