import styles from './App.module.scss';
import NavBar from './components/Navbar';
import LandingChat from './templates/LandingChat';
import LandingCoverages from './templates/LandingCoverages';
import LandingHero from './templates/LandingHero';


function App() {
  return (
    <>
      <NavBar />
      <LandingHero />
      <LandingChat />
      <LandingCoverages />
    </>
  );
}

export default App
