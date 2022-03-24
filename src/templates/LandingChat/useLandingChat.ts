import { useRef } from 'react';
import useObserver from '../../hooks/useObserver';
import useAOS from '../../hooks/useAOS';

const useLandingChat = () => {
  const firstObserverRef = useRef<HTMLDivElement>(null);
  const secondObserverRef = useRef<HTMLDivElement>(null);
  const thirdObserverRef = useRef<HTMLDivElement>(null);
  const firstObserver = useObserver(firstObserverRef, { rootMargin: '-80px' });
  const secondObserver = useObserver(secondObserverRef, { rootMargin: '-80px' });
  const thirdObserver = useObserver(thirdObserverRef, { rootMargin: '-80px' });
  const [firstImageRef] = useAOS();
  const [secondImageRef] = useAOS();
  const [thirdImageRef] = useAOS();

  return {
    firstObserverRef,
    secondObserverRef,
    thirdObserverRef,
    firstObserver,
    secondObserver,
    thirdObserver,
    firstImageRef,
    secondImageRef,
    thirdImageRef,
  }
};

export default useLandingChat;