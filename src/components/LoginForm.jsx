import { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID'; // เปลี่ยนเป็น Client ID ของคุณ

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (email === '123' && password === '1234') {
      navigate('/dashboard'); // เปลี่ยนเส้นทางไปยังหน้าแดชบอร์ด
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google response:', response);
    // คุณสามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ของคุณที่นี่
    // เช่น การส่ง token ไปยังเซิร์ฟเวอร์เพื่อล็อกอิน
  };

  const handleGoogleError = (error) => {
    console.error('Google Login Error:', error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">เข้าสู่ระบบ</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            ชื่อผู้ใช้
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
            รหัสผ่าน
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            ล็อกอิน
          </button>
        </div>

        <div className="flex items-center justify-center">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              logo_alignment="left"
              className="w-full"
            />
          </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  );
}
