import { forwardRef } from 'react';
import styles from './Chat.module.scss';

type ChatT = {
  color: string;
};

const Chat = forwardRef<HTMLDivElement, ChatT>(({color}, ref) => {

  return (
    <div className={styles.box} ref={ref} style={{ backgroundColor: color }}/>
  );
});

export default Chat;