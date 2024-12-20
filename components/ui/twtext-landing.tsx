import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
}

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => {
        }, 3000);
      }
    }
  return (
    <span className="border-r-2 border-black animate-pulse">
      {displayedText}
    </span>
  );
};
