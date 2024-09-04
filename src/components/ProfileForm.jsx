// src/pages/ProfileForm.jsx
import { useState } from 'react';

export default function ProfilePage() {
  // สเตตสำหรับข้อมูลพื้นฐานและข้อมูลที่กรอกเพิ่มเติม
  const [profileData, setProfileData] = useState({
    name: 'John Doe', // ข้อมูลพื้นฐาน
    email: 'john.doe@example.com',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือจัดการข้อมูลเพิ่มเติมที่นี่
    console.log('Updated Profile Data:', profileData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">ข้อมูลโปรไฟล์</h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">ชื่อ</label>
          <p className="text-gray-900">{profileData.name}</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">อีเมล</label>
          <p className="text-gray-900">{profileData.email}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
              เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
              ที่อยู่
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
