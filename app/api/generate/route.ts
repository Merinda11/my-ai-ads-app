import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  console.log('✅ API เริ่มทำงานแล้ว')

  const body = await req.json()
  const { prompt, pinterestUrl } = body

  console.log('📥 ข้อมูลที่ได้รับ:', { prompt, pinterestUrl })

  const messages = [
    {
      role: 'system',
      content:
        'คุณคือผู้เชี่ยวชาญด้านการตลาดและโฆษณาที่สามารถสร้างข้อความโฆษณาที่น่าสนใจและสร้างสรรค์จากแรงบันดาลใจของรูปภาพบน Pinterest ได้'
    },
    {
      role: 'user',
      content: `สร้างโฆษณาสำหรับ: \"${prompt}\" โดยใช้แรงบันดาลใจจากภาพในลิงก์ Pinterest นี้: ${pinterestUrl}`
    }
  ]

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages,
        temperature: 0.8
      })
    })

    const data = await response.json()
    console.log('📦 ตอบกลับจาก OpenAI:', data)

    const result = data.choices?.[0]?.message?.content || 'ไม่สามารถสร้างโฆษณาได้'
    return NextResponse.json({ result })

  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาด:', error)
    return NextResponse.json({ result: 'เกิดข้อผิดพลาดในการเรียกใช้ AI' })
  }
}
