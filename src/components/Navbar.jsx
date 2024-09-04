import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          DooDee
        </a>
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-white">{username}</span>
            <button onClick={handleProfileClick} className="text-white text-2xl">
              😊
            </button>
          </div>
        ) : (
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-green-300">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="/register" className="text-white hover:text-green-300">
                สมัครสมาชิก
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-green-300">
                เข้าสู่ระบบ
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-green-300">
                เกี่ยวกับเรา
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
