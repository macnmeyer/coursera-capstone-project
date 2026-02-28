import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Main />} />
        <Route path="/menu" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<Main />} />
        <Route path="/login" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
