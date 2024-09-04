// src/pages/DashboardPage.jsx
import { useNavigate } from 'react-router-dom';
 // นำเข้าคอมโพเนนต์ About

export default function DashboardPage() {
  const navigate = useNavigate();

  // ฟังก์ชันเพื่อออกจากระบบ (หรือที่คุณต้องการ)
  const handleLogout = () => {
    // การทำงานหลังออกจากระบบ (เช่น ลบข้อมูลผู้ใช้, เปลี่ยนเส้นทาง)
    navigate('/login'); // เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">ยินดีต้อนรับ!</h1>
        <p className="text-gray-700 mb-4">
          ขอบคุณที่ล็อกอินเข้ามา เราหวังว่าคุณจะพบความสะดวกในการใช้งานเว็บไซต์ของเรา
        </p>

        {/* คอมโพเนนต์ About */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">ความสามารถของเว็บไซต์</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">จัดการแผงตลาด</h3>
              <p className="text-gray-600">
                เพิ่ม, แก้ไข, หรือ ลบแผงตลาดตามความต้องการของคุณ เพื่อให้การจัดการเป็นไปอย่างราบรื่นและมีประสิทธิภาพ
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">เพิ่มแผนที่ตลาด</h3>
              <p className="text-gray-600">
                เพิ่มแผนที่ตลาดลงในเว็บไซต์เพื่อให้ผู้เช่าสามารถดูรายละเอียดของแผงและโซนได้สะดวกก่อนการตัดสินใจจอง
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">จัดการข้อมูลผู้ขายและผู้ซื้อ</h3>
              <p className="text-gray-600">
                บันทึกและจัดการข้อมูลของผู้ขายและผู้ซื้อเพื่อให้การสื่อสารและการทำธุรกรรมเป็นไปอย่างมีระเบียบ
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">ระบบการจองแผงตลาด</h3>
              <p className="text-gray-600">
                ระบบที่ช่วยให้ผู้ใช้สามารถจองแผงตลาดได้อย่างง่ายดายและสะดวก
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">การประมูลแผงตลาด</h3>
              <p className="text-gray-600">
                การจัดการประมูลแผงตลาดเพื่อให้ผู้เช่าสามารถเข้าร่วมการประมูลและรับสิทธิ์ในการเช่าแผงได้
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">การรายงานและวิเคราะห์ข้อมูล</h3>
              <p className="text-gray-600">
                รายงานและวิเคราะห์ข้อมูลเพื่อให้คุณสามารถติดตามผลการดำเนินงานและตัดสินใจได้อย่างมีข้อมูล
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">การแจ้งเตือนการชำระเงินผ่าน LINE</h3>
              <p className="text-gray-600">
                รับการแจ้งเตือนการชำระเงินผ่าน LINE เพื่อให้คุณไม่พลาดการชำระเงินที่สำคัญ
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">การประกาศเพื่อประชาสัมพันธ์</h3>
              <p className="text-gray-600">
                การจัดการประกาศเพื่อประชาสัมพันธ์กิจกรรมหรือข้อมูลสำคัญที่เกี่ยวข้องกับตลาด
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
}
