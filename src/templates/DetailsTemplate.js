import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';

const DetailsTemplate = ({ children, pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      {children}
      <Link to={`/${pageType}`}>Go back</Link>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
