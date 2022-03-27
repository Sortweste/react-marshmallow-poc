import useAOS from '../../hooks/useAOS';

const useLandingChat = () => {
  const [firstImageRef] = useAOS('first-paragraph-landing-chat');
  const [secondImageRef] = useAOS('second-paragraph-landing-chat');
  const [thirdImageRef] = useAOS('third-paragraph-landing-chat');

  return {
    firstImageRef,
    secondImageRef,
    thirdImageRef,
  }
};

export default useLandingChat;