import {
  NEW_OFFER,
  CHANGE_OFFER,
  CHANGE_OFFER_SET_ITEM,
  RESET_OFFER,
} from 'actions/offer';

export const initialOffer = {
  intention: null,
  industry: null,
  workforce: null,
  onlineMedia: [],
  companyType: null,
  name: '',
  email: '',
  telephone: '',
  acceptsPrivacy: false,
  notes: '',
};

export default function offer(state = null, action) {
  switch (action.type) {
    case NEW_OFFER:
      return Object.assign({}, initialOffer, state, action.data);
    case CHANGE_OFFER:
      return Object.assign({}, state, action.data);
    case CHANGE_OFFER_SET_ITEM:
      return Object.assign({}, state, {
        [action.property]: action.included
          ? state[action.property].concat([action.item])
          : state[action.property].filter(item => item !== action.item),
      });
    case RESET_OFFER:
      return initialOffer;
    default:
      return state;
  }
}
