import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center pt-[100px]">
      <div className="max-w-[1000px]">
        <p className="font-mono text-green mb-5 text-[16px]">
          {t('greeting')}
        </p>
        <h1 className="text-[clamp(40px,8vw,80px)] font-semibold text-light-heading dark:text-lightest-slate leading-none mb-4">
          {t('name')}
        </h1>
        <h2 className="text-[clamp(40px,8vw,80px)] font-semibold text-light-text dark:text-slate leading-none mb-8">
          {t('role')}
        </h2>
        <p className="max-w-[540px] text-light-text dark:text-slate text-lg mb-12">
          {t('description')}{' '}
          <a href="#" className="text-green hover:text-green/80 transition-colors">
            Upstatement
          </a>.
        </p>
        <a 
          href="#work" 
          className="inline-block px-7 py-5 border border-green text-green rounded font-mono text-sm
                     hover:bg-green/10 transition-colors"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
};

export default Home; 