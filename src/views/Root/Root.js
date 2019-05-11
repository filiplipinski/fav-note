import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Elsdo</h1>
          <Button>Close / Save</Button>
          <Button secondary>Remove</Button>
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
