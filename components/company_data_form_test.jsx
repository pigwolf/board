import React from 'react';
import tap from 'tap';
import { createRenderer } from 'react-addons-test-utils';

import CompanyDataForm from './company_data_form';

const defaultProps = {
  offer: {
    intention: null,
    industry: null,
    workforce: null,
    onlineMedia: [],
  },
  onClickSave: () => {},
  onChangeOfferIndustry: () => {},
  onChangeOfferIntention: () => {},
  onChangeOfferWorkforce: () => {},
  onChangeOfferOnlineMedia: () => {},
  onChangeOfferCompanyType: () => {},
};

tap.test('adds the proper event handlers', (t) => {
  const props = Object.assign({}, defaultProps, {
    offer: {
      intention: 1,
      industry: 2,
      workforce: 5,
      onlineMedia: [1],
      companyType: 1,
    },
  });
  const renderer = createRenderer();
  renderer.render(<CompanyDataForm {... props} />);
  const form = renderer.getRenderOutput();
  t.deepEqual(form.props.className, 'form');
  const rows = form.props.children.slice(1);
  const row = rows[0];
  t.equal(row.type, 'div');
  t.equal(row.props.className, 'row');
  const cols = row.props.children;
  const formGroups = cols[0].props.children;
  const intentionSelect = formGroups[0].props.children[1];
  t.equal(intentionSelect.props.value, props.offer.intention.toString());
  t.equal(intentionSelect.props.className, 'form-control');
  t.equal(intentionSelect.props.onChange, props.onChangeOfferIntention);
  const industrySelect = formGroups[1].props.children[1];
  t.equal(industrySelect.props.value, props.offer.industry.toString());
  t.equal(industrySelect.props.className, 'form-control');
  t.equal(industrySelect.props.onChange, props.onChangeOfferIndustry);
  const workforceSelect = formGroups[2].props.children[1];
  t.equal(workforceSelect.props.value, props.offer.workforce.toString());
  t.equal(workforceSelect.props.className, 'form-control');
  t.equal(workforceSelect.props.onChange, props.onChangeOfferWorkforce);
  t.equal(workforceSelect.props.readOnly, undefined);
  const secondColFormGroups = cols[1].props.children;
  t.equal(secondColFormGroups.length, 2);
  t.equal(secondColFormGroups[0].type, 'div');
  t.equal(secondColFormGroups[0].props.className, 'form-group');
  const onlineMediaCheckboxes = secondColFormGroups[0].props.children[1];
  onlineMediaCheckboxes.forEach((checkboxDiv, i) => {
    t.equal(checkboxDiv.type, 'div');
    t.equal(checkboxDiv.props.className, 'checkbox');
    const input = checkboxDiv.props.children.props.children[0];
    t.equal(input.type, 'input');
    t.equal(input.props.value, i);
    t.equal(input.props.checked, props.offer.onlineMedia.indexOf(i) !== -1);
    t.equal(input.props.onChange, props.onChangeOfferOnlineMedia);
  });
  const companyTypeCheckboxes = secondColFormGroups[1].props.children[1];
  companyTypeCheckboxes.forEach((radioDiv, i) => {
    t.equal(radioDiv.props.className, 'radio');
    const input = radioDiv.props.children.props.children[0];
    t.equal(input.type, 'input');
    t.equal(input.props.value, i);
    t.equal(input.props.checked, props.offer.companyType === i);
    t.equal(input.props.onChange, props.onChangeOfferCompanyType);
  });
  const saveButton = rows[1].props.children.props.children[1];
  t.equal(saveButton.props.className, 'btn btn-primary');
  t.equal(saveButton.props.onClick, props.onClickSave);
  t.end();
});
