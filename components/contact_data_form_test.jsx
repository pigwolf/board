import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tap from 'tap';

import { initialOffer } from 'reducers/offer';
import ContactDataForm from './contact_data_form';
import ContactInputs from './contact_inputs';
import Recaptcha from './recaptcha';

const defaultProps = {
  offer: initialOffer,
  recaptchaSitekey: 'key',
  recaptchaToken: null,
  isLoading: false,
  onChangeOfferName: () => {},
  onChangeOfferEmail: () => {},
  onChangeOfferTelephone: () => {},
  onChangeOfferAcceptsPrivacy: () => {},
  onChangeOfferNotes: () => {},
  onSolveRecaptcha: () => {},
  onClickCompanyDataLink: () => {},
  onClickSubmit: () => {},
};

tap.test('passes down the props', (t) => {
  t.plan(14);
  const props = defaultProps;
  const renderer = createRenderer();
  renderer.render(<ContactDataForm {... props} />);
  const rows = renderer.getRenderOutput().props.children.slice(1);
  t.equal(rows[1].props.className, 'row');
  t.equal(rows[2].props.className, 'row');
  t.equal(rows[1].props.children.length, 2);
  const leftColumn = rows[1].props.children[0];
  t.equal(leftColumn.type, 'div');
  t.equal(leftColumn.props.className, 'col-md-4 col-md-offset-2');
  const contactInputs = leftColumn.props.children;
  t.equal(contactInputs.type, ContactInputs);
  t.deepEqual(contactInputs.props, {
    name: props.offer.name,
    email: props.offer.email,
    telephone: props.offer.telephone,
    onChangeName: props.onChangeOfferName,
    onChangeEmail: props.onChangeOfferEmail,
    onChangeTelephone: props.onChangeOfferTelephone,
  });
  const rightColumn = rows[1].props.children[1];
  const notesTextareaFormGroup = rightColumn.props.children;
  const notesTextarea = notesTextareaFormGroup.props.children[1];
  t.equal(notesTextarea.props.value, props.offer.notes);
  t.equal(notesTextarea.props.onChange, props.onChangeOfferNotes);
  const middleColumn = rows[2].props.children;
  t.equal(middleColumn.props.className, 'col-md-4 col-md-offset-4');
  const acceptsPrivacyFormGroup = middleColumn.props.children[0];
  const acceptsPrivacyCheckbox = acceptsPrivacyFormGroup.props.children;
  t.equal(acceptsPrivacyCheckbox.props.className, 'checkbox');
  const acceptsPrivacyLabel = acceptsPrivacyCheckbox.props.children;
  const acceptsPrivacyInput = acceptsPrivacyLabel.props.children[0];
  t.equal(acceptsPrivacyInput.props.checked, props.offer.acceptsPrivacy);
  t.equal(acceptsPrivacyInput.props.onChange, props.onChangeOfferAcceptsPrivacy);
  const submitButton = rows[3].props.children.props.children[1];
  t.equal(submitButton.props.onClick, props.onClickSubmit);
});

tap.test('enables the submit button', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, {
    offer: Object.assign({}, initialOffer, {
      intention: 0,
      industry: 0,
      workforce: 0,
      onlineMedia: [],
      companyType: 0,
      email: 'db@domachine.de',
      telephone: '0123465',
      name: 'Dominik Burgdörfer',
      acceptsPrivacy: true,
    }),
    recaptchaToken: 'foo',
  });
  const renderer = createRenderer();
  renderer.render(<ContactDataForm {... props} />);
  const contactDataForm = renderer.getRenderOutput();
  const rows = contactDataForm.props.children.slice(1);
  const submitButton = rows[3].props.children.props.children[1];
  t.equal(submitButton.props.disabled, false);
});

tap.test('disables the submit button', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, {});
  const renderer = createRenderer();
  renderer.render(<ContactDataForm {... props} />);
  const contactDataForm = renderer.getRenderOutput();
  const rows = contactDataForm.props.children.slice(1);
  const submitButton = rows[3].props.children.props.children[1];
  t.equal(submitButton.props.disabled, true);
});

tap.test('shows the recaptcha', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, {});
  const renderer = createRenderer();
  renderer.render(<ContactDataForm {... props} />);
  const rows = renderer.getRenderOutput().props.children.slice(1);
  const recaptcha = rows[2].props.children.props.children[1];
  t.equal(recaptcha.type, Recaptcha);
});

tap.test('hides the recaptcha', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, { recaptchaHidden: true });
  const renderer = createRenderer();
  renderer.render(<ContactDataForm {... props} />);
  const rows = renderer.getRenderOutput().props.children.slice(1);
  const recaptcha = rows[2].props.children.props.children[1];
  t.equal(recaptcha, null);
});
