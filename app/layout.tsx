import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from './contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casablanca E-commerce',
  description: 'Luxury fashion e-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
