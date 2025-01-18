import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-[100px]">
      <div className="max-w-[1000px]">
        <p className="font-mono text-green mb-5 text-[16px]">
          Hi, my name is
        </p>
        <h1 className="text-[clamp(40px,8vw,80px)] font-semibold text-light-heading dark:text-lightest-slate leading-none mb-4">
          Milad Mohammadi.
        </h1>
        <h2 className="text-[clamp(40px,8vw,80px)] font-semibold text-light-text dark:text-slate leading-none mb-8">
          I build things for the web.
        </h2>
        <p className="max-w-[540px] text-light-text dark:text-slate text-lg mb-12">
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products at{' '}
          <a href="#" className="text-green hover:text-green/80 transition-colors">
            Upstatement
          </a>.
        </p>
        <a 
          href="#work" 
          className="inline-block px-7 py-5 border border-green text-green rounded font-mono text-sm
                     hover:bg-green/10 transition-colors"
        >
          Check out my course!
        </a>
      </div>
    </section>
  );
};

export default Home; 