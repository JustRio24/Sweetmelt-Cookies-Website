import React, { useState, useEffect } from "react";

const TypingEffect = ({
  text = "Halo, ini efek typing tanpa delete!",
  typingSpeed = 150,
  className = "text-xl text-pink-600",
  element = "span",
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, typingSpeed]);

  return React.createElement(
    element,
    { className },
    <>
      {displayedText}
      <span className="inline-block ml-1 animate-blink">|</span>
    </>
  );
};

export default TypingEffect;
