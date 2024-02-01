import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SlideInViewportProps {
  children: React.ReactNode;
}

function SlideInViewport({ children }: SlideInViewportProps) {
  const [visible, setVisible] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) setVisible(true);
    else setVisible(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`duration-500 ${visible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      {children}
    </div>
  );
}

export default SlideInViewport;
