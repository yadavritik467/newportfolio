import { useEffect, useState } from "react";
import "./Typewriter.css";

const Typewriter = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(30);

  const textArray = [
    "A Full Stack Developer",
    "A MERN Stack Developer",
    "A MEAN Stack Developer",
  ];

  useEffect(() => {
    let timer: any;
    const handleTyping = () => {
      const fullText = textArray[loopNum % textArray.length];
      if (!isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(30);
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);
      }

      // If the text is fully typed out
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }
      // If the text is fully deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text tracking-wider text-primary-dark">
        {currentText} |
      </p>
    </div>
  );
};

export default Typewriter;
