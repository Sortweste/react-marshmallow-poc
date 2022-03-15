import { forwardRef } from 'react';
import styles from './Paragraph.module.scss';

type ParagraphT = {
  title: string;
  content: string;
};

const Paragraph = forwardRef<HTMLDivElement, ParagraphT>(({ content, title }, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <p className={styles.title} >{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
});

export default Paragraph;