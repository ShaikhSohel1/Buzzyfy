import './globals.css'
import { Figtree } from 'next/font/google'
import SideBar from '@/components/SideBar'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Buzzyfy',
  description: 'Listen to your favorite music for free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
        {children}
        </SideBar>
        </body>
    </html>
  )
}
