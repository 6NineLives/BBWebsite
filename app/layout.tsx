import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from './contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>xianlee E-commerce</title>
        <meta name="description" content="Luxury fashion e-commerce store" />
      </head>
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
