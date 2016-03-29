export const NEW_OFFER = 'NEW_OFFER';
export const CHANGE_OFFER = 'CHANGE_OFFER';
export const CHANGE_OFFER_SET_ITEM = 'CHANGE_OFFER_SET_ITEM';
export const CREATE_OFFER = 'CREATE_OFFER';
export const CREATE_OFFER_SUCCESS = 'CREATE_OFFER_SUCCESS';
export const RESET_OFFER = 'RESET_OFFER';

export function newOffer(data) {
  return {
    type: NEW_OFFER,
    data,
  };
}

export function changeOffer(data) {
  return {
    type: CHANGE_OFFER,
    data,
  };
}

export function changeOfferSetItem(property, item, included) {
  return {
    type: CHANGE_OFFER_SET_ITEM,
    property,
    item,
    included,
  };
}

export function createOffer() {
  return {
    type: CREATE_OFFER,
  };
}

export function createOfferSuccess() {
  return {
    type: CREATE_OFFER_SUCCESS,
  };
}

export function resetOffer() {
  return {
    type: RESET_OFFER,
  };
}
