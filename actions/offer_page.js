export const CHANGE_OFFER_PAGE = 'CHANGE_OFFER_PAGE';

export function changeOfferPage(page) {
  return {
    type: CHANGE_OFFER_PAGE,
    page,
  };
}
