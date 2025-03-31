import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        เลือกแพ็กเกจสมัครใช้งาน
      </h1>
      <p className="text-center mb-6">
        สร้างโฆษณาพรีเมียมด้วย AI ที่ตอบโจทย์ธุรกิจของคุณ ✨
      </p>

      <div className="grid gap-4 w-full max-w-md">
        <PackageBox title="💡 Basic" price="฿199" desc="(1 โฆษณา)" />
        <PackageBox title="🚀 Pro" price="฿499" desc="(3 โฆษณา)" />
        <PackageBox title="🌟 Premium" price="฿999/เดือน" desc="(ไม่จำกัด + มีรูปภาพ AI)" />
      </div>

      {!session && (
        <div className="mt-8">
          <p className="mb-2 text-center">กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
          <button
            onClick={() => signIn("google")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Login ด้วย Google
          </button>
        </div>
      )}

      {session && (
        <div className="mt-8">
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            ไปยังหน้า Dashboard ➜
          </Link>
        </div>
      )}
    </main>
  );
}

function PackageBox({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <div className="border p-4 rounded-xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-lg font-bold">{price}</p>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
