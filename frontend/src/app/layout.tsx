import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hero Tickets',
  description: 'crie seu evento rápido e fácil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        <div className='mb-8 mt-16 mr-14'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
