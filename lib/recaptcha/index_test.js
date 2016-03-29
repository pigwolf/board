'use strict';

const tap = require('tap');
const io = require('run-io');
const request = require('request');
const config = require('config');

const verify = require('./index').verify;

tap.test('verifies successfully', (t) => {
  t.plan(2);
  const token = 'my token';
  const response = { body: { success: true } };
  const it = verify(token);
  t.deepEqual(it.next(), {
    done: false,
    value: io.lift(request)(config.get('recaptcha.url'), {
      json: true,
      qs: { secret: config.get('recaptcha.secret'), response: token },
    }),
  });
  t.deepEqual(it.next(response), {
    done: true,
    value: response.body.success,
  });
});

tap.test('rejects the token', (t) => {
  t.plan(2);
  const token = 'my token';
  const response = { body: { success: true } };
  const it = verify(token);
  t.deepEqual(it.next(), {
    done: false,
    value: io.lift(request)(config.get('recaptcha.url'), {
      json: true,
      qs: { secret: config.get('recaptcha.secret'), response: token },
    }),
  });
  t.deepEqual(it.next(response), {
    done: true,
    value: response.body.success,
  });
});
