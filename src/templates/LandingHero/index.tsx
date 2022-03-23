import styles from './LandingHero.module.scss';

const LandingHero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Car insurance with a conscience</h1>
      <p className={styles.subtitle}>Faster. Fairer. On your side.</p>
      <button className={styles.button}>Get a quote</button>
    </div>
  );
};

export default LandingHero;