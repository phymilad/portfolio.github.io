import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          <li>HTML, CSS, JavaScript, TypeScript</li>
          <li>React.js, Redux, Tailwind CSS, Material-UI</li>
          <li>Git, Webpack, Vite, ESLint, Prettier</li>
          <li>REST APIs, GraphQL, Responsive Design, Unit Testing</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills; 