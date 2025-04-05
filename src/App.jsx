import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/pages/Home.jsx";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Leaderboard from './components/pages/Leaderboard.jsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signin' element={<Signin/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Leaderboard' element={<Leaderboard/>} />
        </Routes>
    </Router >
    
  );
}

export default App

