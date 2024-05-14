import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Container } from '@mui/material';

interface AnimatedBoxProps {
  startTrigger: string,
  endTrigger: string,
  children?: React.ReactNode,
  id?: string,
  className?: string
}

gsap.registerPlugin(ScrollTrigger);

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ id, children, startTrigger, endTrigger, className }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;

    if (!box) return;

    gsap.fromTo(
      box,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: box,
          start: startTrigger,
          end: endTrigger,
          scrub: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id={id} className={className} ref={boxRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default AnimatedBox;