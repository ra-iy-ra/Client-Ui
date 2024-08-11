import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Plans from './pages/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/plans' element={<Plans/>}></Route>
        </Routes>
      </Router>
     

  
    </div>
  );
}

export default App;
