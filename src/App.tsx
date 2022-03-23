import styles from './App.module.scss';
import NavBar from './components/Navbar';
import LandingChat from './templates/LandingChat';
import LandingHero from './templates/LandingHero';


function App() {
  return (
    <>
      <NavBar />
      <LandingHero />
      <LandingChat />
    </>
  );
}

export default App
