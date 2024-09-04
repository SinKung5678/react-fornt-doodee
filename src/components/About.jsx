// src/components/About.jsx
export default function About() {
    return (
      <section className="bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">เกี่ยวกับเว็บไซต์</h2>
          <p className="text-gray-700 mb-4">
            เว็บไซต์ของเรามีฟังก์ชันหลักที่ช่วยให้การจัดการตลาดเป็นเรื่องง่ายและสะดวก
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>จัดการแผงตลาด (เพิ่ม, แก้ไข, ลบ)</li>
            <li>เพิ่มแผนที่ตลาดพร้อมรายละเอียดของแผงและโซน</li>
            <li>จัดการข้อมูลผู้ขายและผู้ซื้อ</li>
            <li>ระบบการจองแผงตลาด</li>
            <li>การประมูลแผงตลาด</li>
            <li>การรายงานและวิเคราะห์ข้อมูล</li>
            <li>การแจ้งเตือนการชำระเงินผ่าน LINE</li>
            <li>การจัดการข้อร้องเรียน</li>
            <li>การประกาศเพื่อประชาสัมพันธ์</li>
            <li>ฟังก์ชันการกู้คืนรหัสผ่าน</li>
          </ul>
        </div>
      </section>
    );
  }
  