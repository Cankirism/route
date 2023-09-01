import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
function App() {
  return (
    <div className="App">
    
     <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>}/>
        <Route path= "/users/:id" element={<UserDetail/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
