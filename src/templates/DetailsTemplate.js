import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 0;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  margin-top: 25px;
`;

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, twitterName }) => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big as="h1">
            {title}
          </StyledHeading>
          <StyledParagraph>created {created} ago</StyledParagraph>
        </StyledPageHeader>
        <Paragraph>{content}</Paragraph>
        {pageContext === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
        {pageContext === 'twitters' && (
          <StyledImage alt={title} src={`https://avatars.io/twitter/${twitterName}`} />
        )}

        <StyledButton as={Link} to={`/${pageContext}`} activecolor={pageContext}>
          close / save
        </StyledButton>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
