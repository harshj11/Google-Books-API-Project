import './App.css';
import About from './components/About/About';
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
    </div>
  );
}

export default App;
