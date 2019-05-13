import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 47px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.notes};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;

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
