import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[index];
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

export default useTypingEffect;