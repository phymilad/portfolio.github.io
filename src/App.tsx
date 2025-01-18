import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-navy transition-colors duration-200">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <Header />
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
