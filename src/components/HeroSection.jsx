// src/components/HeroSection.jsx


export default function HeroSection() {
  return (
    <section className="bg-green-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">ยินดีต้อนรับสู่ DooDee</h1>
        <p className="text-xl mb-8">
          แพลตฟอร์มการจัดการแผงตลาดที่ง่ายและมีประสิทธิภาพ
        </p>
        <a
          href="/register"
          className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200"
        >
          เริ่มต้นใช้งาน
        </a>
      </div>
    </section>
  );
}
