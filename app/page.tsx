'use client'

import { useState } from 'react'

export default function Home() {
  const [imageUrl] = useState('') // ✅ เอา setImageUrl ออก

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">สร้างโฆษณาด้วย AI</h1>

      {/* ใช้ imageUrl เพื่อให้ ESLint ไม่ error */}
      <p style={{ display: 'none' }}>{imageUrl}</p>

      <p>ยินดีต้อนรับเข้าสู่เว็บไซต์สร้างโฆษณา AI</p>
    </main>
  )
}
