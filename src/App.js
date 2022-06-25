import './App.css';
import Navbar from "./components/navbar/navbar"
import Hero from './components/hero/hero';
import PopularCollection from './components/popularCollection/popularCollection';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <PopularCollection></PopularCollection>
    </div>
  );
}

export default App;
