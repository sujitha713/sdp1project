import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Properties from './components/Properties';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
};

export default App;
