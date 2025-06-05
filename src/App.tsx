import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Demo from './pages/Demo';
import Footer from './components/Footer/Footer';
import Services from './pages/Services';
import Store from './pages/Store';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <Router>
      <div className="main-content" style={{ width: '100%', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/store" element={<Store />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
        </div>
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;