import posterImg from "@assets/lapatlada-summer2026_1773386028141.png";

function CheckIcon() {
  return (
    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#e53935" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.42 2 2 0 0 1 3.62 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9A16 16 0 0 0 15 16l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen notebook-bg font-sans">
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-4 opacity-30 bounce-gentle pointer-events-none">
        <StarIcon className="w-10 h-10 text-yellow-400" />
      </div>
      <div className="fixed top-32 right-6 opacity-30 bounce-gentle-delay pointer-events-none">
        <StarIcon className="w-8 h-8 text-blue-400" />
      </div>

      {/* ========= HERO / HEADER ========= */}
      <header className="relative overflow-hidden">
        {/* Blue top bar */}
        <div className="bg-blue-600 py-2 px-4 text-center">
          <p className="text-white text-sm font-medium tracking-wide">
            🎓 คอร์สภาคฤดูร้อน Summer 2026 · เปิดรับสมัครแล้ว!
          </p>
        </div>

        {/* Main hero */}
        <div
          className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-10 pb-6 px-4"
          style={{ borderBottom: "4px solid #1e88e5" }}
        >
          {/* Decorative wavy red ribbon top-right */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100">
              <path d="M100 0 Q60 20 80 60 Q100 100 60 100 L100 100Z" fill="#e53935" />
            </svg>
          </div>
          {/* Decorative wavy yellow ribbon top-left */}
          <div className="absolute top-0 left-0 w-24 h-24 opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100">
              <path d="M0 0 Q40 20 20 60 Q0 100 40 100 L0 100Z" fill="#fdd835" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Grad cap emoji + title */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl bounce-gentle">🎓</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight drop-shadow">
                โปรพิเศษ!
              </h1>
              <span className="text-4xl bounce-gentle-delay">🌍</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
              ฝากลูกไว้กับครูดรีม
            </h2>

            {/* Blue badge */}
            <div className="inline-block bg-blue-600 text-white text-lg font-bold px-6 py-2 rounded-full shadow-md mb-4">
              ⭐ สำหรับน้องๆ ระดับประถมศึกษา
            </div>

            {/* Wavy doodle separator */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <svg key={i} className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M4 12 Q8 6 12 12 Q16 18 20 12" strokeLinecap="round" />
                </svg>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:0652526213"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <PhoneIcon />
                โทรสมัครเลย
              </a>
              <a
                href="#pricing"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105"
              >
                ดูโปรราคา 💰
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ========= COURSES SECTION ========= */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">คอร์สเรียนพิเศษ</h3>
            <p className="text-xl font-semibold text-gray-600">เสริมความรู้</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course cards */}
            {[
              { icon: "🔤", title: "ปูพื้นฐาน Phonics", desc: "เรียนรู้การออกเสียงภาษาอังกฤษอย่างถูกต้อง สร้างฐานที่แข็งแกร่ง" },
              { icon: "📝", title: "ปรับพื้นฐานแกรมม่า", desc: "ไวยากรณ์ภาษาอังกฤษที่เข้าใจง่าย เหมาะสำหรับระดับประถม" },
              { icon: "🔢", title: "ปรับพื้นฐานคณิตศาสตร์", desc: "คณิตศาสตร์พื้นฐานเสริมทักษะการคิดคำนวณ" },
              { icon: "📚", title: "เสริมความรู้", desc: "เนื้อหารอบด้านเพิ่มเติมเพื่อให้น้องๆ พร้อมก้าวสู่ปีการศึกษาใหม่" },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-blue-100 hover:border-blue-400 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {course.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckIcon />
                      <h4 className="text-lg font-bold text-gray-800">{course.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= PRICING SECTION ========= */}
      <section id="pricing" className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-yellow-400 rounded-3xl p-8 text-center shadow-2xl border-4 border-yellow-500 relative overflow-hidden pulse-glow"
          >
            {/* Stars decoration */}
            <div className="absolute top-4 left-6">
              <StarIcon className="w-8 h-8 text-yellow-600 opacity-50 spin-slow" />
            </div>
            <div className="absolute top-4 right-6">
              <StarIcon className="w-6 h-6 text-yellow-600 opacity-50 spin-slow" />
            </div>

            <h3 className="text-3xl font-extrabold text-gray-800 mb-4">โปรราคาพิเศษ</h3>

            <div className="mb-2">
              <span className="text-7xl font-extrabold text-gray-900">1,200</span>
              <span className="text-4xl font-bold text-gray-700">.-</span>
            </div>

            <p className="text-gray-600 text-lg font-semibold mb-6">
              <span className="line-through text-gray-400 mr-2">จากปกติ 1,490.-</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-1">ประหยัด 290.-</span>
            </p>

            <a
              href="tel:0652526213"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xl px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105"
            >
              📞 สมัครเรียนเลย!
            </a>
          </div>
        </div>
      </section>

      {/* ========= FEATURES / WHY CHOOSE ========= */}
      <section className="py-12 px-4 bg-white/70 backdrop-blur">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-extrabold text-blue-700 mb-2">ทำไมต้องเลือกครูดรีม?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "👩‍🏫", title: "เรียนตัวต่อตัว", desc: "ให้ความสนใจกับน้องๆ อย่างเต็มที่ ไม่มีใครตกหล่น" },
              { emoji: "📋", title: "เนื้อหาปรับตามผู้เรียน", desc: "วิเคราะห์จุดอ่อนและปรับเนื้อหาให้เหมาะสมกับแต่ละคน" },
              { emoji: "💡", title: "เข้าใจง่าย ตรงจุด", desc: "เทคนิคการสอนที่เด็กๆ เข้าใจง่ายและจดจำได้นาน" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-md border-2 border-blue-100 hover:border-blue-400 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 bounce-gentle">{item.emoji}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckIcon />
                  <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TEACHER PROFILE ========= */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-4 px-6">
              <h3 className="text-2xl font-extrabold text-white text-center">เกี่ยวกับครู</h3>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Teacher photo placeholder with poster */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl">
                    <img
                      src={posterImg}
                      alt="ครูลภัส์ลดา พรมสอน"
                      className="w-full h-full object-cover object-[center_70%]"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-extrabold text-gray-800 mb-1">ครูลภัส์ลดา พรมสอน</h4>
                  <p className="text-blue-600 font-semibold text-lg mb-4">ครูภาษาอังกฤษ รร.เมืองเลย</p>
                  <div className="space-y-2">
                    {[
                      "ประสบการณ์สอนภาษาอังกฤษระดับประถม",
                      "เชี่ยวชาญ Phonics และการอ่าน-เขียน",
                      "ใส่ใจนักเรียนทุกคนแบบตัวต่อตัว",
                      "ผลงานดี นักเรียนผ่านเกณฑ์ 100%",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-blue-500">✦</span>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= POSTER SECTION ========= */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-blue-700 mb-6">โปสเตอร์คอร์ส Summer 2026</h3>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-300 inline-block">
            <img
              src={posterImg}
              alt="Summer Course 2026 - ครูดรีม"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <p className="mt-4 text-gray-500 text-sm">สแกนหรือโทรหาครูดรีมเพื่อสมัครเรียน</p>
        </div>
      </section>

      {/* ========= CONTACT / CTA SECTION ========= */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-center shadow-2xl text-white">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-3xl font-extrabold mb-2">สนใจสอบถามข้อมูล</h3>
            <p className="text-blue-200 mb-6 text-lg">ลงทะเบียนหรือสอบถามเพิ่มเติมได้เลย!</p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:0652526213"
                className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold text-xl px-6 py-4 rounded-2xl transition-all hover:scale-105"
              >
                <PhoneIcon />
                0652526213
              </a>
              <a
                href="https://www.facebook.com/lapatlada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold text-xl px-6 py-4 rounded-2xl transition-all hover:scale-105"
              >
                <span className="text-2xl">📲</span>
                @lapatlada
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "4", label: "วิชาเรียน" },
                { num: "1:1", label: "ตัวต่อตัว" },
                { num: "1,200", label: "บาท/คอร์ส" },
                { num: "100%", label: "ใส่ใจทุกคน" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-extrabold">{stat.num}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========= FOOTER ========= */}
      <footer className="bg-blue-700 text-white py-6 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <BookIcon />
          <span className="text-xl font-bold">ครูดรีม · Kru Dream</span>
          <GlobeIcon />
        </div>
        <p className="text-blue-200 text-sm">ครูภาษาอังกฤษ รร.เมืองเลย | Summer Course 2026</p>
        <p className="text-blue-300 text-xs mt-2">📞 0652526213 · 📲 @lapatlada</p>
        <div className="mt-3 flex justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
      </footer>
    </div>
  );
}
