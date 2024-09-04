// src/pages/RegisterPage.jsx

import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

export default function RegisterPage() {
  return (
    <div>
      
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">สมัครสมาชิก</h2>
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
