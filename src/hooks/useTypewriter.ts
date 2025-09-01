// import { useState, useEffect } from "react";

// export const useTypewriter = (text: string, speed: number = 100) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, speed);

//       return () => clearTimeout(timeout);
//     }
//   }, [index, text, speed]);

//   return displayedText;
// };


import { useState, useEffect } from "react";

export const useTypewriter = (text: string, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayedText;
};