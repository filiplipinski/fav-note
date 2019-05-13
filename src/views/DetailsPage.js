import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        break;
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <DetailsTemplate pageType={pageType}>
        <p>{pageType}</p>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

DetailsPage.defaultProps = {
  match: PropTypes.shape({
    path: '/notes/',
  }),
};

export default DetailsPage;
