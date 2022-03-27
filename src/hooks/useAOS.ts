import { RefObject, useLayoutEffect, useRef } from "react";
import trapezoidWave from "../utils/trapezoid";

const transformElement = (ref: RefObject<HTMLDivElement>, value: number) => {
  if(ref?.current) {
    ref.current.style.transform = `scale3d(${value}, ${value}, 1)`;
  }
};

const useAOS = (parentId: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = document.getElementById(parentId);
    const executeAnimation = () => {
      const windowBottom = window.scrollY + window.innerHeight;
      const parentTop = parent?.getBoundingClientRect().top || 0;
      const elementTop = parentTop + window.scrollY;
      const scrollPercentage = (windowBottom - elementTop) / (parent?.offsetHeight || 1);
      
      if( (scrollPercentage < 0 ) || (scrollPercentage > 1) ){
        transformElement(ref, 0);
        return;
      }

      const mapScrollPercentage = scrollPercentage * Math.PI;
      const step = trapezoidWave(mapScrollPercentage);
      const computedStep = step > 0.9 ? 1 : step;

      transformElement(ref, computedStep);
    };

    window.addEventListener('scroll', executeAnimation);

    return () => {
      window.removeEventListener('scroll', executeAnimation);
    };

  }, []);

  return [ref] as const;

};

export default useAOS;
