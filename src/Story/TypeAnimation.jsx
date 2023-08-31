import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Paragraphs = React.forwardRef(({ text, typeSpeed, isPlaying }, ref) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: text,
      typeSpeed: typeSpeed,
      startDelay: 1000, // Don't start with a delay
      loop: false,
      showCursor: false,
      fadeOut: false,
      loopCount: Infinity,
    });

    ref.current = typed;
    

    return () => {
      <>
      </>
    };
  }, [text, typeSpeed, isPlaying, ref]);

  return <span ref={el} />;
});

export default Paragraphs;

