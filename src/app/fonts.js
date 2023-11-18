import { Lato, Roboto } from 'next/font/google'

export const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
})