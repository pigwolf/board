import tap from 'tap';

import {
  NEW_OFFER,
  CHANGE_OFFER,
  CHANGE_OFFER_SET_ITEM,
  CREATE_OFFER,
  CREATE_OFFER_SUCCESS,
  RESET_OFFER,
  newOffer,
  changeOffer,
  changeOfferSetItem,
  createOffer,
  createOfferSuccess,
  resetOffer,
} from './offer';

tap.equal(NEW_OFFER, 'NEW_OFFER', 'exports NEW_OFFER');
tap.equal(CHANGE_OFFER, 'CHANGE_OFFER', 'exports CHANGE_OFFER');
tap.equal(CHANGE_OFFER_SET_ITEM, 'CHANGE_OFFER_SET_ITEM', 'exports CHANGE_OFFER_SET_ITEM');
tap.equal(CREATE_OFFER, 'CREATE_OFFER', 'exports CREATE_OFFER');
tap.equal(RESET_OFFER, 'RESET_OFFER', 'exports RESET_OFFER');

tap.test('creates new action', (t) => {
  t.plan(1);
  const data = { _data: 1 };
  const action = newOffer(data);
  t.deepEqual(action, {
    type: NEW_OFFER,
    data,
  });
});

tap.test('creates change action', (t) => {
  t.plan(1);
  const data = { _data: 1 };
  const action = changeOffer(data);
  t.deepEqual(action, {
    type: CHANGE_OFFER,
    data,
  });
});

tap.test('creates change set item action', (t) => {
  t.plan(1);
  const property = 'foo';
  const item = 'my item';
  const included = false;
  const action = changeOfferSetItem(property, item, included);
  t.deepEqual(action, {
    type: CHANGE_OFFER_SET_ITEM,
    property,
    item,
    included,
  });
});

tap.test('creates create action', (t) => {
  t.plan(1);
  const action = createOffer();
  t.deepEqual(action, {
    type: CREATE_OFFER,
  });
});

tap.test('creates create success action', (t) => {
  t.plan(1);
  const action = createOfferSuccess();
  t.deepEqual(action, {
    type: CREATE_OFFER_SUCCESS,
  });
});

tap.test('creates reset action', (t) => {
  t.plan(1);
  const action = resetOffer();
  t.deepEqual(action, {
    type: RESET_OFFER,
  });
});
