import tap from 'tap';

import { newOffer, changeOffer, changeOfferSetItem, resetOffer } from 'actions/offer';
import reduce, { initialOffer } from './offer';

tap.test('initially returns null', (t) => {
  t.plan(1);
  const state = reduce(undefined, {});
  t.deepEqual(state, null);
});

tap.test('creates new offer', (t) => {
  t.plan(1);
  const state = { _state: 1 };
  const data = { intention: 1 };
  const newState = reduce(state, newOffer(data));
  t.deepEqual(newState, Object.assign({}, initialOffer, state, data));
});

tap.test('changes offer', (t) => {
  t.plan(1);
  const state = { intention: null };
  const data = { intention: 1 };
  const newState = reduce(state, changeOffer(data));
  t.deepEqual(newState, Object.assign({}, state, data));
});

tap.test('changes offer set item (includes)', (t) => {
  t.plan(1);
  const state = { onlineMedia: ['my media'] };
  const property = 'onlineMedia';
  const item = 'fb';
  const included = true;
  const newState = reduce(state, changeOfferSetItem(property, item, included));
  t.deepEqual(newState, {
    onlineMedia: state.onlineMedia.concat([item]),
  });
});

tap.test('changes offer set item (excludes)', (t) => {
  t.plan(1);
  const state = { onlineMedia: ['fb', 'my media'] };
  const property = 'onlineMedia';
  const item = 'fb';
  const included = false;
  const newState = reduce(state, changeOfferSetItem(property, item, included));
  t.deepEqual(newState, {
    onlineMedia: state.onlineMedia.filter(i => i !== item),
  });
});

tap.test('resets the offer', (t) => {
  t.plan(1);
  const state = {};
  t.deepEqual(reduce(state, resetOffer()), initialOffer);
});
