import './App.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
    <Wrapper>
      <NavBar />
      <Hero />
      <Hero />
      <Hero />
    </Wrapper>
    </>
    
  );
}

export default App;
