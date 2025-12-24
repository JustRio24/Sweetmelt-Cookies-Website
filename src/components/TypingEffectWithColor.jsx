import React, { useState, useEffect } from "react";

const TypingEffectWithColor = ({
  textParts,
  typingSpeed = 100,
  element = "h2",
  wrapperClass = "",
}) => {
  const [charIndex, setCharIndex] = useState(0);

  // Gabungkan semua karakter dan simpan mapping style-nya
  const fullText = textParts.map((part) => part.text).join("");
  const charStyles = [];

  textParts.forEach((part) => {
    for (let i = 0; i < part.text.length; i++) {
      charStyles.push(part.className);
    }
  });

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText, typingSpeed]);

  // Ambil karakter satu per satu dan beri style sesuai
  const displayedChars = [];
  for (let i = 0; i < charIndex; i++) {
    displayedChars.push(
      <span key={i} className={charStyles[i]}>
        {fullText[i]}
      </span>
    );
  }

  return React.createElement(
    element,
    { className: wrapperClass },
    <>
      {displayedChars}
      <span className="inline-block ml-1 animate-blink">|</span>
    </>
  );
};

export default TypingEffectWithColor;
