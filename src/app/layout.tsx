import './globals.css'
import { Figtree } from 'next/font/google'
import SideBar from '@/components/SideBar'
import SupaBaseProvider from '../../providers/SupabaseProvider'

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
        <SupaBaseProvider>

        <SideBar>
        {children}
        </SideBar>
        </SupaBaseProvider>
        </body>
    </html>
  )
}
