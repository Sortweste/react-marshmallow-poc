import { useRef } from 'react';
import Chat from '../../components/Chat';
import Paragraph from '../../components/Paragraph';
import useObserver from '../../hooks/useObserver';

import images from '../../../public/images/landing_chat.png';
import styles from './LandingChat.module.scss';
import useAOS from '../../hooks/useAOS';

const LandingChat = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const observer = useObserver(ref, { rootMargin: '-280px' });
  useAOS(ref);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>We are getting clever with cover</h1>
      <div className={styles.col}>
        <div className={styles.paragraphs}>
          <Paragraph
            title='Get lightning speed support'
            content='Hello, whos there? Its us, returning your live chat messages in record time! Get answers quickly from our friendly experts.'
          />
          <Paragraph
            title='Manage your policy in seconds'
            content='Edit and update your policy quickly with just a few taps in your Marshmallow account - online and on the app.'
          />
          <Paragraph
            title='Pay less'
            content='Insurance fraud is big business. And usually, you end up paying for it! Our speedy fraud checks mean you only pay for yourself - not the mistakes of others.'
          />
        </div>
        <div className={styles.image_container}>
          <img src={images} alt="landing chat" className={styles.image} />
          {/* {observer?.isIntersecting &&  <Chat />} */}
          <Chat ref={ref}/>
        </div>
      </div>
    </section>
  );
};

export default LandingChat;