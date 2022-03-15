import { RefObject, useEffect, useState } from "react";

const initialConfig = {
  rootMargin: '0px',
  threshold: 0.1,
  root: null,
  freeze: false,
};

const useObserver = (element: RefObject<Element>, config = initialConfig as Partial<typeof initialConfig>) => {
  const [observer, setObserver] = useState<IntersectionObserverEntry>();

  const setObserverEntries = ([entry]: IntersectionObserverEntry[]): void => {
    setObserver(entry);
  };

  useEffect(() => {
    if(!element?.current) return;
    const observer = new IntersectionObserver(setObserverEntries, config);
    observer.observe(element.current);
    
    return () => observer.disconnect();

  }, [element, config.rootMargin]);


  return observer;
};

export default useObserver;