import Chat from '../../components/Chat';
import Paragraph from '../../components/Paragraph';
import images from '../../../public/images/landing_chat.png';
import styles from './LandingChat.module.scss';
import useLandingChat from './useLandingChat';

const LandingChat = () => {
  const { 
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
            id='first-paragraph-landing-chat'
            title='Get lightning speed support'
            content='Hello, whos there? Its us, returning your live chat messages in record time! Get answers quickly from our friendly experts.'
          />
          <Paragraph
            id='second-paragraph-landing-chat'
            title='Manage your policy in seconds'
            content='Edit and update your policy quickly with just a few taps in your Marshmallow account - online and on the app.'
          />
          <Paragraph
            id='third-paragraph-landing-chat'
            title='Pay less'
            content='Insurance fraud is big business. And usually, you end up paying for it! Our speedy fraud checks mean you only pay for yourself - not the mistakes of others.'
          />
        </div>
        <div className={styles.image_container}>
          <img src={images} alt="landing chat" className={styles.image} />
          <Chat ref={firstImageRef} color='#f06292'/>
          <Chat ref={secondImageRef} color='#4dd0e1'/>
          <Chat ref={thirdImageRef} color='#00c853'/>
        </div>
      </div>
    </section>
  );
};

export default LandingChat;