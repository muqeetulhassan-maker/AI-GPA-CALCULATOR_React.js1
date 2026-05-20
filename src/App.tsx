import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Home from './pages/Home/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Calculator from './pages/Calculator/page';
import Cumulative from './pages/Cumulative/page';
import WhatIf from './pages/WhatIf/page';
import History from './pages/History/page';
import Services from './pages/Services/page';
import Contact from './pages/Contact/page';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/cumulative" element={<Cumulative />} />
          <Route path="/whatif" element={<WhatIf />} />
          <Route path="/history" element={<History />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
