
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import UserWithUseLocation from './components/UserWithUseLocation';
import UserDetailWithUseLocation from './components/UserDetailWithUseLocation';
import NotFound from './components/NotFound';
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
        <Route path="/withuselocation" element={<UserWithUseLocation/>}/>
        <Route path="/withuselocation/:id" element={<UserDetailWithUseLocation/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </Router>
    </div>
  );
}
export default App;
