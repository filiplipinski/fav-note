import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
