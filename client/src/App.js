import './App.css';
import Image from './Components/Image';
import React from 'react';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Image />
    </ThemeProvider>
  );
}

export default App;
