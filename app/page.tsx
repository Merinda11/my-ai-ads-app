// ✅ Starter code to implement: "AI generates ads from inspiration images on Pinterest"
// This code will be improved step by step with you :)

'use client'

import React, { useState } from 'react'

export default function Page() {
  const [prompt, setPrompt] = useState('')
  const [adText, setAdText] = useState('')
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const generateAd = async () => {
    setLoading(true)
    setAdText('')

    const searchQuery = encodeURIComponent(prompt)
    const pinterestUrl = `https://www.pinterest.com/search/pins/?q=${searchQuery}`

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, pinterestUrl })
    })

    const data = await response.json()
console.log('📦 ตอบกลับจาก API:', data)
setAdText(data.result)

    setLoading(false)
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✨ สร้างโฆษณา AI จากแรงบันดาลใจ</h1>

      <textarea
        placeholder="พิมพ์แนวภาพหรือสินค้าที่คุณต้องการโฆษณา..."
        className="w-full p-2 border rounded mb-4"
        rows={3}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateAd}
        className="bg-black text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'กำลังสร้างโฆษณา...' : 'สร้างโฆษณา'}
      </button>

      {adText && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="font-semibold mb-2">💬 โฆษณาที่ได้:</h2>
          <p>{adText}</p>
        </div>
      )}
    </main>
  )
}
