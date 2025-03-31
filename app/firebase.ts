// firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBU9QNS6JuYV-CNW8VxMep4XjJlNxy6lc",
  authDomain: "smartadcreator-8a142.firebaseapp.com",
  projectId: "smartadcreator-8a142",
  storageBucket: "smartadcreator-8a142.firebasestorage.app",
  messagingSenderId: "572363362904",
  appId: "1:572363362904:web:da528cd8ef56d416e1f02d",
  measurementId: "G-767BYW4FK9"
}

// ป้องกันไม่ให้ initialize ซ้ำ
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export { auth }
