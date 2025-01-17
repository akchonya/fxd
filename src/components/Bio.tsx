import { useState, useEffect } from 'react';

interface BioProps {
  name: string;
  title: string;
  skills: string[];
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export function Bio({ name, title, skills, description, socialLinks }: BioProps) {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayedCommand.length < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedCommand(title.slice(0, displayedCommand.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedCommand, title]);

  return (
    <div className="bio-container">
      <div className="terminal-line">
        <span className="prompt">fxd@bio:~$</span>
        <span className="command">{displayedCommand}</span>
        {!isTypingComplete && <span className="cursor">_</span>}
      </div>
      
      {isTypingComplete && (
        <>
          <h1>{name}</h1>
          <p className="description">{description}</p>
          
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="social-links">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
} 