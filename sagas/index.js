import { takeEvery } from 'redux-saga';
import { cps, put } from 'redux-saga/effects';

import { offers } from 'api/client';
import { createOfferSuccess, CREATE_OFFER } from 'actions/offer';

export default function *root(getState) {
  yield takeEvery(CREATE_OFFER, createOffer, getState);
}

function *createOffer(getState) {
  const { offer, recaptchaToken: recaptcha } = getState();
  yield cps(offers.create, offer, { recaptcha });
  yield put(createOfferSuccess());
}
