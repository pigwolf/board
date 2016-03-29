import tap from 'tap';

import { changeOfferPage } from 'actions/offer_page';
import { newOffer, resetOffer } from 'actions/offer';
import reduce from './offer_page';

tap.test('initially returns "company_data"', (t) => {
  t.plan(1);
  const state = reduce(undefined, {});
  t.equal(state, 'company_data');
});

tap.test('changes the page', (t) => {
  t.plan(1);
  const page = 'foobar';
  const state = reduce('ffob', changeOfferPage(page));
  t.equal(state, page);
});

tap.test('changes the page on new offer', (t) => {
  t.plan(1);
  const state = reduce('contact_data', newOffer({}));
  t.equal(state, 'company_data');
});

tap.test('resets the page', (t) => {
  t.plan(1);
  t.equal(reduce('contact_data', resetOffer()), 'company_data');
});
