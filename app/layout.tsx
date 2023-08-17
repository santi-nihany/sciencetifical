import HeaderHome from './components/home-landing/HeaderHome';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sciencetifical',
  description: 'The Github of Science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = false;
  return (
    <html lang="en">
      <body >
        <HeaderHome auth={isAuthenticated}/>
        {children}
      </body>
    </html>
  )
}
