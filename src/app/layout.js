import './globals.css'
import { lato, roboto } from './fonts'
import GlobalState from '@/context'
import Navbar from '@/component/Navbar'

export const metadata = {
  title: 'Onile',
  description: 'Onile property',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalState>
          <Navbar />
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
