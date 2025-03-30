export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>เลือกแพ็กเกจสมัครใช้งาน</h1>
      <p>สร้างโฆษณาพรีเมียมด้วย AI ที่ตอบโจทย์ธุรกิจของคุณ ✨</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '2rem' }}>
        <a href="https://buy.stripe.com/6oE288030fKF3Ic9AA" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '1rem', fontSize: '1rem' }}>💡 Basic – ฿199 (1 โฆษณา)</button>
        </a>

        <a href="https://buy.stripe.com/28oeUU6roaql5QkfYZ" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '1rem', fontSize: '1rem' }}>🚀 Pro – ฿499 (3 โฆษณา)</button>
        </a>

        <a href="https://buy.stripe.com/7sI7ss4jgfKF2E84gi" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '1rem', fontSize: '1rem' }}>🌟 Premium – ฿999/เดือน (ไม่จำกัด + มีรูปภาพ AI)</button>
        </a>
      </div>
    </main>
  )
}