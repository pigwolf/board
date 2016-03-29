import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tap from 'tap';

import App from './app';
import OfferResetDialog from './offer_reset_dialog';

const defaultProps = { offerCreated: false, children: [] };

tap.test('shows the modal', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, { offerCreated: true });
  const renderer = createRenderer();
  renderer.render(<App {... props} />);
  const app = renderer.getRenderOutput();
  const container = app.props.children[1];
  t.equal(container.props.children[0].type, OfferResetDialog);
});

tap.test('hides the modal', (t) => {
  t.plan(1);
  const props = Object.assign({}, defaultProps, { offerCreated: false });
  const renderer = createRenderer();
  renderer.render(<App {... props} />);
  const app = renderer.getRenderOutput();
  const container = app.props.children[1];
  t.equal(container.props.children[0], null);
});
