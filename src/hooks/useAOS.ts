import { RefObject, useLayoutEffect, useRef } from "react";
import piecewiseWave from "../utils/piecewise";

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
      const mapScrollPercentage = scrollPercentage * Math.PI;
      const step = piecewiseWave(mapScrollPercentage);
      transformElement(ref, step);
    };

    window.addEventListener('scroll', executeAnimation);

    return () => {
      window.removeEventListener('scroll', executeAnimation);
    };

  }, []);

  return [ref] as const;

};

export default useAOS;
