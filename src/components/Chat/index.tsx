import { forwardRef } from 'react';
import styles from './Chat.module.scss';

const Chat = forwardRef<HTMLDivElement>(({}, ref) => {

  return (
    <div className={styles.box} ref={ref} />
  );
});

export default Chat;