import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-height: 280px;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'white')};
  padding: 17px 30px;

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-bottom: 5px;
`;

const StyledHeading = styled(Heading)`
  margin-top: 5px;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 6px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 47px;
  width: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 55%;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading> Elo elo </StyledHeading>
      <DateInfo>12 maj</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/hello_roman" />}
      {cardType === 'article' && <StyledLinkButton href="https://www.google.pl" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo repellendus, eius
        suscipit quis, laboriosam voluptatum delectus ipsam earum officiis veritatis enim tenetur
        reiciendis sequi, nulla dignissimos a unde excepturi?
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  // cardType: PropTypes.string, //albo 2gi sposob:
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
