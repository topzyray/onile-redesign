import './globals.css'
import { lato, roboto } from './_lib/fonts'
import Navbar from '@/component/Navbar'
import StoreProvider from './StoreProvider'

export const metadata = {
  title: 'Onile',
  description: 'Onile property',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
        <Navbar />
        <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  )
}
