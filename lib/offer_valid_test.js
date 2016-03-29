const tap = require('tap');

const offerIsValid = require('./offer_valid');
const isEmail = offerIsValid.isEmail;
const companyDataIsValid = offerIsValid.companyDataIsValid;

tap.test('isEmail properly validates email', (t) => {
  t.plan(4);
  t.ok(isEmail('db@domachine.de'));
  t.notOk(isEmail('domachine.de'));
  t.notOk(isEmail('db'));
  t.ok(isEmail('db@domachine'));
});

tap.test('companyDataIsValid validates properly', (t) => {
  t.plan(1);
  const data = {
    intention: 0,
    industry: null,
    workforce: 2,
    companyType: 0,
  };
  t.equal(companyDataIsValid(data), false);
});

tap.test('companyDataIsValid validates properly', (t) => {
  t.plan(1);
  const data = {
    intention: 0,
    industry: 1,
    workforce: 2,
    companyType: null,
  };
  t.equal(companyDataIsValid(data), false);
});

tap.test('companyDataIsValid validates properly', (t) => {
  t.plan(1);
  const data = {
    intention: null,
    industry: 1,
    workforce: 2,
    companyType: 3,
  };
  t.equal(companyDataIsValid(data), false);
});

tap.test('companyDataIsValid validates properly', (t) => {
  t.plan(1);
  const data = {
    intention: 2,
    industry: 1,
    workforce: 2,
    companyType: 3,
    email: 'db@domachine.de',
    telephone: '12345',
    name: '',
    acceptsPrivacy: true,
  };
  t.equal(offerIsValid(data), false);
});

tap.test('companyDataIsValid validates properly', (t) => {
  t.plan(1);
  const data = {
    intention: 2,
    industry: 1,
    workforce: 2,
    companyType: 3,
    email: 'db@domachine.de',
    telephone: '12345',
    name: 'Foobar',
    acceptsPrivacy: false,
  };
  t.equal(offerIsValid(data), false);
});
