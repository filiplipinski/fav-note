import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import DetailsTemplate from 'templates/DetailsTemplate';

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
        throw new Error('Something went wrong with matching paths');
    }
  }

  render() {
    const { pageType } = this.state;

    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis tellus rhoncus cursus tincidunt. In ac arcu libero. Maecenas imperdiet felis quis consectetur viverra. Morbi feugiat quam et lacus scelerisque dignissim in a ante. Nunc sodales nisl ut elit vehicula, nec blandit tellus suscipit. Mauris a nulla id tortor semper accumsan quis convallis velit. Nam sed nisi ac justo congue tincidunt condimentum id enim. Donec a posuere lectus. Suspendisse nec nunc commodo, mattis neque vitae, luctus dolor. Sed ut quam pellentesque, vulputate magna eu, tincidunt lacus. Fusce ultrices ligula vitae aliquam sagittis.',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
