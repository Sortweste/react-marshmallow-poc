import { Ref, useLayoutEffect } from "react";

const useAOS = (ref: any) => {
  const initialPosition = window.scrollY;
  const maxValueHeight = 430;
  const maxValueWidth = 300;

  useLayoutEffect(() => {
    // f(x) = sin(x), x = 0 to pi, where x is the scroll percentage, y is the computed (height/width) value
    const executeAnimation = () => {
      // At scrollPercentage = 50%, Math.sin(pi/2) = 1.
      const scrollPercentage = window.scrollY / window.innerHeight;
      const mapScrollPercentage = scrollPercentage * Math.PI;
      const step = Math.sin(mapScrollPercentage);
      
      const computedHeight = Math.floor(maxValueHeight * step);
      const computedWidth = Math.floor(maxValueWidth * step);
      
      if(ref?.current) {
        ref.current.style.height = `${computedHeight}px`;
        ref.current.style.width = `${computedWidth}px`;
      }
    };

    window.addEventListener('scroll', executeAnimation);

    return () => {
      window.removeEventListener('scroll', executeAnimation);
    };

  }, []);

};

export default useAOS;
