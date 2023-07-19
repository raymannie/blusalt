import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './pages/Dashboard';
import TrafficSystem from './pages/TafficSystem';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<TrafficSystem />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
