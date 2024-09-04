// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginForm from './components/LoginForm';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar'; // นำเข้า Navbar
import DashboardPage from './pages/DashboardPage';

function App() {
  
  return (
    <Router>
      <Navbar /> {/* วาง Navbar ที่นี่ */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardPage />} /> {/* เพิ่มเส้นทางไปยังหน้า Dashboard */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
