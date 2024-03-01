import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bullet from './Bullet';
import Blitz from './Blitz';
import Rapid from './Rapid';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
            <li style={{ marginRight: '10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/bullet">Bullet</Link>
            </li>
            <li style={{ marginRight: '10px' }}>
              <Link to="/blitz">Blitz</Link>
            </li>
            <li>
              <Link to="/rapid">Rapid</Link>
            </li>
          </ul>
        </nav>

        <Routes>
         <Route path="/" element={<Home/>} />
          <Route path="/bullet" element={<Bullet />} />
          <Route path="/blitz" element={<Blitz />} />
          <Route path="/rapid" element={<Rapid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
