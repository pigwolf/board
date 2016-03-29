import tap from 'tap';

import { createOfferSuccess, resetOffer } from 'actions/offer';
import reduce from './offer_created';

tap.test('initially returns false', (t) => {
  t.plan(1);
  t.equal(reduce(undefined, {}), false);
});

tap.test('returns true on create offer success', (t) => {
  t.plan(1);
  t.equal(reduce(undefined, createOfferSuccess()), true);
});

tap.test('returns false on reset offer', (t) => {
  t.plan(1);
  t.equal(reduce(undefined, resetOffer()), false);
});
