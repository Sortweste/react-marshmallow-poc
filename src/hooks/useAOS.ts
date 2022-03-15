import { useLayoutEffect } from "react";

const useAOS = () => {
  const initialPosition = window.scrollY;

  useLayoutEffect(() => {
    const executeAnimation = () => {

      const animation = () => {
        // const elementHeight = document.getElementById(id)?.getBoundingClientRect().top;
        // const difference = target - initialPosition;

      };

      requestAnimationFrame(animation);
    };

    window.addEventListener('scroll', executeAnimation);

    return () => {
      window.removeEventListener('scroll', executeAnimation);
    };

  }, []);

};

export default useAOS;
