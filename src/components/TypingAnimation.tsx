"use client";

import { useState, useEffect } from "react";

const words = ["Masa Depan", "Solusi Digital", "Inovasi AI", "Bisnis Anda"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_AFTER_WORD = 2000;

export default function TypingAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(word.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="gradient-text-animate">
      {currentText}
      <span className="inline-block w-[3px] h-[0.8em] bg-neon-blue ml-1 align-middle animate-pulse" />
    </span>
  );
}
