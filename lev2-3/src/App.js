import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetail';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogdetail/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;