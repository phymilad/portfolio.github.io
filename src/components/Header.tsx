import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  const navItems = [
    { number: '01.', text: 'About', href: '#about' },
    { number: '02.', text: 'Experience', href: '#experience' },
    { number: '03.', text: 'Work', href: '#work' },
    { number: '04.', text: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-light-bg/90 dark:bg-navy/90 backdrop-blur-sm z-10 transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-[100px]">
          {/* Logo */}
          <a href="/" className="text-green w-10 h-10 hover:text-green/80 transition-colors">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeWidth="2" d="M20 1L1 10L20 19L39 10L20 1Z"/>
            </svg>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="text-light-text dark:text-slate hover:text-light-heading dark:hover:text-green p-2 rounded-full hover:bg-green/10 transition-colors"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.number}>
                  <a 
                    href={item.href} 
                    className="text-light-text dark:text-slate hover:text-light-heading dark:hover:text-green transition-colors font-mono text-[13px]"
                  >
                    <span className="text-green">{item.number} </span>
                    {item.text}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/resume.pdf" 
                  className="px-4 py-2 border border-green text-green rounded font-mono text-[13px]
                           hover:bg-green/10 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 