import { forwardRef } from 'react';
import styles from './Paragraph.module.scss';

type ParagraphT = {
  id: string;
  title: string;
  content: string;
};

const Paragraph = forwardRef<HTMLDivElement, ParagraphT>(({ id, content, title }, ref) => {
  return (
    <div className={styles.container} ref={ref} id={id}>
      <p className={styles.title} >{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
});

export default Paragraph;