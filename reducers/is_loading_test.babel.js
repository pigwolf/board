import tap from 'tap';

import { createOffer, createOfferSuccess } from 'actions/offer';
import reduce from './is_loading';

tap.test('initially returns false', (t) => {
  t.plan(1);
  t.equal(reduce(undefined, {}), false);
});

tap.test('starts on create-offer', (t) => {
  t.plan(1);
  t.equal(reduce(false, createOffer()), true);
});

tap.test('resets on create-offer-success', (t) => {
  t.plan(1);
  t.equal(reduce(true, createOfferSuccess()), false);
});
