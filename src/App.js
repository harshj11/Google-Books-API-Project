import './App.css';
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
        Hello
      </Route>
      
    </div>
  );
}

export default App;
