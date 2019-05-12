import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  height: 100vh;
  width: 153px;
  padding-top: 40px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinkList = styled.ul`
  list-style: none;
`;

const LogoutBUttonIcon = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => {
  return (
    <Wrapper activeColor={pageType}>
      <StyledLogoLink to="/" />
      <StyledLinkList>
        <li>
          <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
        </li>
      </StyledLinkList>
      <LogoutBUttonIcon as={NavLink} to="/login" icon={logoutIcon} activeclass="active" />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
