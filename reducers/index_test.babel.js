import tap from 'tap';

import reduce from './index';

tap.test('includes all reducers', (t) => {
  t.plan(1);
  const state = reduce(undefined, {});
  t.deepEqual(Object.keys(state), Object.keys({
    isLoading: null,
    offer: null,
    offerCreated: null,
    offerPage: null,
    recaptchaToken: null,
  }));
});
