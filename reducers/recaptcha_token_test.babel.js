import tap from 'tap';

import { changeRecaptchaToken } from 'actions/recaptcha_token';
import { newOffer, resetOffer } from 'actions/offer';
import { changeOfferPage } from 'actions/offer_page';
import reduce from './recaptcha_token';

tap.test('initially returns null', (t) => {
  t.plan(1);
  const state = reduce(undefined, {});
  t.equal(state, null);
});

tap.test('changes recaptcha token', (t) => {
  t.plan(1);
  const token = 'new_token';
  const state = reduce(null, changeRecaptchaToken(token));
  t.equal(state, token);
});

tap.test('resets on new offer', (t) => {
  t.plan(1);
  const token = 'my_token';
  const state = reduce(token, newOffer({}));
  t.deepEqual(state, null);
});

tap.test('resets on page change', (t) => {
  t.plan(1);
  const token = 'my_token';
  const state = reduce(token, changeOfferPage('my_page'));
  t.deepEqual(state, null);
});

tap.test('resets on offer-reset', (t) => {
  t.plan(1);
  const token = 'foo token';
  const state = reduce(token, resetOffer());
  t.deepEqual(state, null);
});
