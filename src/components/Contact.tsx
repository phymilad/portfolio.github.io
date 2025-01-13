import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">Your LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" className="text-blue-500">Your GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact; 