import React from 'react';

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-sm mb-8">Projects</h2>
      <div className="space-y-4">
        <a href="#" className="block text-[#666] text-sm hover:text-white">Demopower</a>
        <a href="#" className="block text-[#666] text-sm hover:text-white">Cookiemunch</a>
        <a href="#" className="block text-[#666] text-sm hover:text-white">Screen time converter</a>
        <a href="#" className="block text-[#666] text-sm hover:text-white">LED math</a>
        <a href="#" className="block text-[#666] text-sm hover:text-white">Strike.org</a>
      </div>
      <div className="mt-auto pt-32 text-xs text-[#666]">
        ©2022 [Your Name].com
      </div>
    </div>
  );
};

export default Projects; 