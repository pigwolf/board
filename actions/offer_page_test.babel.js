import tap from 'tap';

import {
  CHANGE_OFFER_PAGE,
  changeOfferPage,
} from './offer_page';

tap.equal(CHANGE_OFFER_PAGE, 'CHANGE_OFFER_PAGE', 'exports CHANGE_OFFER_PAGE');

tap.test('creates change action', (t) => {
  t.plan(1);
  const page = 'foo';
  const action = changeOfferPage(page);
  t.deepEqual(action, {
    type: CHANGE_OFFER_PAGE,
    page,
  });
});
