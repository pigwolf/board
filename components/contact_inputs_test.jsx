import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tap from 'tap';

import ContactInputs from './contact_inputs';

const defaultProps = {
  name: '',
  email: '',
  telephone: '',
  onChangeName: () => {},
  onChangeEmail: () => {},
  onChangeTelephone: () => {},
};

tap.test('passes down the props', (t) => {
  t.plan(6);
  const props = defaultProps;
  const renderer = createRenderer();
  renderer.render(<ContactInputs {... props} />);
  const root = renderer.getRenderOutput();
  const nameFormGroup = root.props.children[0];
  const nameInput = nameFormGroup.props.children[1];
  t.equal(nameInput.props.value, props.name);
  t.equal(nameInput.props.onChange, props.onChangeName);
  const emailFormGroup = root.props.children[1];
  const emailInput = emailFormGroup.props.children[1];
  t.equal(emailInput.props.value, props.email);
  t.equal(emailInput.props.onChange, props.onChangeEmail);
  const telephoneFormGroup = root.props.children[2];
  const telephoneInput = telephoneFormGroup.props.children[1];
  t.equal(telephoneInput.props.value, props.telephone);
  t.equal(telephoneInput.props.onChange, props.onChangeTelephone);
});
