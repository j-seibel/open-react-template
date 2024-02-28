'use client'
import React from 'react';
import Typed from 'typed.js';

function TypedReactHeader() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' with your bets. ', ' wtih your savings. ', ' with better habbits. ', 'with your friends.'],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      loopCount: Infinity,
      smartBackspace: false,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <div className="App h1 mb-4 text-red-600" style={{ fontSize: '2em' }} data-aos="fade-up">
      <h1 className="h1 mb-4" style={{ fontSize: '2.5em' }}>CatchFire</h1>
      <span ref={el} style={{ fontSize: '1.5em' }} />
     {/* <span style={{ fontSize: '1.5em' }}> 🔥</span> */}
    </div>
  );
}

export default TypedReactHeader