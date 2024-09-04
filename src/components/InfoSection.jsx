// src/components/InfoSection.jsx

import { FaTools, FaBell, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';

export default function InfoSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">เกี่ยวกับ DooDee</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaTools className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4">จัดการแผงตลาดได้ง่ายๆ</h3>
            <p className="text-center mb-4">
              เราให้คุณสามารถจัดการแผงตลาดได้อย่างสะดวกและง่ายดายผ่านแพลตฟอร์มของเรา ไม่ว่าจะเป็นการจองแผง การติดตามสถานะ หรือการรายงานต่างๆ
            </p>
            <a
              href="/features"
              className="text-green-600 hover:underline font-semibold"
            >
              ดูรายละเอียดเพิ่มเติม
            </a>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaBell className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4">ระบบแจ้งเตือนผ่าน LINE</h3>
            <p className="text-center mb-4">
              แพลตฟอร์มของเรารองรับการแจ้งเตือนผ่าน LINE ทำให้คุณไม่พลาดการแจ้งเตือนสำคัญต่างๆ เช่น การชำระเงิน การจองแผง และอื่นๆ
            </p>
            <a
              href="/notifications"
              className="text-green-600 hover:underline font-semibold"
            >
              ดูรายละเอียดเพิ่มเติม
            </a>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaMapMarkedAlt className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4">แผนที่ตลาด</h3>
            <p className="text-center mb-4">
              คุณสามารถดูแผนที่ตลาดและรายละเอียดของแต่ละแผงเพื่อช่วยในการตัดสินใจจองแผงได้อย่างง่ายดาย
            </p>
            <a
              href="/market-maps"
              className="text-green-600 hover:underline font-semibold"
            >
              ดูแผนที่ตลาด
            </a>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaChartLine className="text-green-600 text-4xl mb-4" />
            <h3 className="text-2xl font-semibold mb-4">รายงานและวิเคราะห์</h3>
            <p className="text-center mb-4">
              คุณสามารถเข้าถึงรายงานและข้อมูลการวิเคราะห์ต่างๆ เพื่อช่วยในการวางแผนและจัดการตลาดได้อย่างมีประสิทธิภาพ
            </p>
            <a
              href="/reports"
              className="text-green-600 hover:underline font-semibold"
            >
              ดูรายงานและการวิเคราะห์
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
