import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate>
    <>
      {articles.map(item => (
        <Card
          id={item.id}
          key={item.id}
          title={item.title}
          content={item.content}
          created={item.created}
          articleUrl={item.articleUrl}
        />
      ))}
    </>
  </GridTemplate>
);

// argument to destrukturyzacja store, przekazuje obiekt w ktorym sa artykuly

const mapStateToProps = ({ articles }) => ({ articles });

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
