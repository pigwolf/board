'use strict';

const request = require('request');
const io = require('run-io');
const config = require('config');

exports = module.exports = io.run(verify);
exports.verify = verify;

function *verify(token) {
  const r = yield io.lift(request)(
    config.get('recaptcha.url'),
    {
      json: true,
      qs: { secret: config.get('recaptcha.secret'), response: token },
    }
  );
  return r.body.success;
}
