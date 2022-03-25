import { useLayoutEffect, useRef } from "react";

const useAOS = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // f(x) = sin(x), x = 0 to pi, where x is the scroll percentage, y is the computed (height/width) value
    const executeAnimation = () => {
      // At scrollPercentage = 50%, Math.sin(pi/2) = 1.
      const scrollPercentage = window.scrollY / window.innerHeight;
      // if(scrollPercentage > 1) return;
      const mapScrollPercentage = scrollPercentage * Math.PI;
      const step = Math.sin(mapScrollPercentage);
      
      if(ref?.current) {
        ref.current.style.transform = `scale3d(${step}, ${step}, 1)`;
      }
    };

    window.addEventListener('scroll', executeAnimation);

    return () => {
      window.removeEventListener('scroll', executeAnimation);
    };

  }, []);

  return [ref] as const;

};

export default useAOS;
