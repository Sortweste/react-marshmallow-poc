import Chat from '../../components/Chat';
import Paragraph from '../../components/Paragraph';
import images from '../../../public/images/landing_chat.png';
import styles from './LandingChat.module.scss';
import useLandingChat from './useLandingChat';

const LandingChat = () => {
  const { 
    firstObserver,
    firstObserverRef,
    secondObserver,
    secondObserverRef,
    thirdObserver,
    thirdObserverRef,
    firstImageRef,
    secondImageRef,
    thirdImageRef
  } = useLandingChat();

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>We are getting clever with cover</h1>
      <div className={styles.col}>
        <div className={styles.paragraphs}>
          <Paragraph
            ref={firstObserverRef}
            title='Get lightning speed support'
            content='Hello, whos there? Its us, returning your live chat messages in record time! Get answers quickly from our friendly experts.'
          />
          <Paragraph
            ref={secondObserverRef}
            title='Manage your policy in seconds'
            content='Edit and update your policy quickly with just a few taps in your Marshmallow account - online and on the app.'
          />
          <Paragraph
            ref={thirdObserverRef}
            title='Pay less'
            content='Insurance fraud is big business. And usually, you end up paying for it! Our speedy fraud checks mean you only pay for yourself - not the mistakes of others.'
          />
        </div>
        <div className={styles.image_container}>
          <img src={images} alt="landing chat" className={styles.image} />
          {/* Remove this observers, items should auto disappear */}
          { firstObserver?.isIntersecting && <Chat ref={firstImageRef} color='#f06292'/> }
          { secondObserver?.isIntersecting && <Chat ref={secondImageRef} color='#4dd0e1'/> }
          { thirdObserver?.isIntersecting && <Chat ref={thirdImageRef} color='#00c853'/> }
        </div>
      </div>
    </section>
  );
};

export default LandingChat;