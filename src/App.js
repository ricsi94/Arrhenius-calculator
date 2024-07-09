// Modules
import { HashRouter as BrowserRouter , Route  , Routes , Navigate } from 'react-router-dom';

// CSS
import './App.css';
// Pages and Components
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
