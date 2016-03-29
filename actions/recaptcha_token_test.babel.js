import tap from 'tap';

import {
  CHANGE_RECAPTCHA_TOKEN,
  changeRecaptchaToken,
} from './recaptcha_token';

tap.equal(CHANGE_RECAPTCHA_TOKEN, 'CHANGE_RECAPTCHA_TOKEN', 'exports CHANGE_RECAPTCHA_TOKEN');

tap.test('create change action', (t) => {
  t.plan(1);
  const token = 'token';
  const action = changeRecaptchaToken(token);
  t.deepEqual(action, {
    type: CHANGE_RECAPTCHA_TOKEN,
    token,
  });
});
