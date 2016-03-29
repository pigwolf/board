import { connect } from 'react-redux';

import App from 'components/app';

function mapStateToProps({ offerCreated }) {
  return {
    offerCreated,
  };
}

export default connect(mapStateToProps)(App);
