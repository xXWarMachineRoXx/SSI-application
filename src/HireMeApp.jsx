/* ;D */
/* eslint-disable react/prop-types */

import  { useState, useEffect } from 'react';

const TypewriterText = ({ text = '', onComplete = () => {}, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (index === text.length) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <p style={{ display: 'flex', alignItems: 'center' }}>
      {displayText}
      <span 
        style={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '2px'
        }}
      />
    </p>
  );
};




const HireMeApp = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const fullText = `Dear Ilya Sutskever,

I am [Your Name], a software developer with a strong passion for AI, writing to express my interest in contributing to Safe Superintelligence Inc. Although my experience is primarily in software development (MERN and LAMP stacks), I have actively pursued AI projects and courses.

Key Points:
AI Projects: Developed a chatbot with Botpress, completed Coursera AI courses, created a reinforcement learning Snake AI, and ranked in the top 28% in a Kaggle competition using CatBoost.
Professional Experience: 2.5 years in software development, recently leading an ITMS and ticketing tool project, integrating it with a MERN dashboard and OpenNMS.
Alignment with SSI: Deeply inspired by your mission to integrate safety and capabilities in AI. I am eager to contribute my technical skills and AI knowledge to your groundbreaking work.
I am willing to volunteer to learn and contribute to your mission. Though I do not have a US work visa, I am open to remote opportunities.

Would you be available for a brief meeting to discuss how I can contribute to SSI? I am flexible with timing and eager to explore potential collaboration.

Thank you for considering my application.

Best regards,

[Your Full Name]
[Your Phone Number]
[Your LinkedIn Profile or Portfolio]
[Your Email Address]

P.S. I am a big fan of your work and the SSI team! I am excited about the possibility of working together to create a safer and more beneficial future with AI.`;

  const lines = fullText.split('\n');

  const handleClick = () => {
    if (currentLineIndex === -1) {
      setCurrentLineIndex(0);
    }
  };

  const handleLineComplete = () => {
    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex((prev) => prev + 1);
    }
  };

  return (
    <div style={{ textAlign: 'left', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Application to Safe Superintelligence Inc.</h1>
      <button onClick={handleClick}>
        Display Application
      </button>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
        {lines.map((line, index) => (
          index <= currentLineIndex && (
            <TypewriterText 
              key={index} 
              text={line} 
              speed={30} 
              onComplete={handleLineComplete}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default HireMeApp;