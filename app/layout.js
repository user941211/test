import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '전자서명',
  description: '전자서명 Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <div className="w-full mx-auto navbar text-center">
          <Link href="/" className="logo border border-black rounded-md p-2">실험용 CRUD</Link>
          <Link href="/list" className='border border-black rounded-lg p-2'>List</Link>
        </div>
      </body>
    </html>
  )
}
