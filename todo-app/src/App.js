import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './home/Home';
import { AllTheme, GlobalStyled } from './styled-global/GlobalStyled';

function App() {
  return (
    <div >
      <ThemeProvider theme={{AllTheme}}>
        <GlobalStyled/>
        <Home/> 
      </ThemeProvider>
    </div>
  );
}

export default App;
