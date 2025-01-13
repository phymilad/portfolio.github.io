import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
