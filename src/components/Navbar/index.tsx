import styles from './Navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <p>My Demo</p>
      <ul className={styles.item_container}>
        <li>
          Claims
        </li>
        <li>
          Help
        </li>
        <li>
          Our story
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;