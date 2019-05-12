import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  background-color: ${({ theme }) => theme.grey100};
  color: black;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  padding: 15px 30px;
  border-radius: 50px;
  border: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 10px 20px 10px 40px;
      background-image: url(${magnifierIcon});
      background-repeat: no-repeat;
      background-position: 15px 50%;
      background-size: 15px;
    `}
`;

export default Input;
