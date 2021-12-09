import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Navbar, Search } from './components/index';
import Route from './Route';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <Search />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
