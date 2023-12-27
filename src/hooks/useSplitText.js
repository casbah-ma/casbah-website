import { useEffect, useRef, useState } from 'react';

export const useSplitText = (text) => {
  const textRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [prevWidth, setPrevWidth] = useState();
  useEffect(() => {
    const calculateLines = () => {
      const textElement = textRef.current;
      if (!textElement) return;

      const textNode = document.createTextNode(text);
      textElement.appendChild(textNode);
      setLines(getLineBreaks(textNode));
      textElement.removeChild(textNode);
    };

    calculateLines();
    const handleWidthResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth !== prevWidth) {
        calculateLines();
        setPrevWidth(newWidth);
      }
    };
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, [text, prevWidth]);

  return { lines, textRef };
};

function getLineBreaks(node) {
  // we only deal with TextNodes
  if (!node || !node.parentNode || node.nodeType !== 3) return [];
  // our Range object form which we'll get the characters positions
  const range = document.createRange();
  // here we'll store all our lines
  const lines = [];
  // begin at the first char
  range.setStart(node, 0);
  // initial position
  let prevBottom = range.getBoundingClientRect().bottom;
  let str = node.textContent;
  let current = 1; // we already got index 0
  let lastFound = 0;
  let bottom = 0;
  // iterate over all characters
  while (current <= str.length) {
    // move our cursor
    range.setStart(node, current);
    if (current < str.length - 1) range.setEnd(node, current + 1);
    bottom = range.getBoundingClientRect().bottom;
    if (bottom > prevBottom) {
      // line break
      lines.push(
        str.substr(lastFound, current - lastFound) // text content
      );
      prevBottom = bottom;
      lastFound = current;
    }
    current++;
  }
  // push the last line
  lines.push(str.substr(lastFound));

  return lines;
}
