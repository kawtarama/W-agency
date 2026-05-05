import { Playfair_Display, Poppins } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import CustomCursor from '../components/CustomCursor'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://wagency.com'),
  title: 'WAgency | Premium Holding Agency',
  description: 'Luxury growth, branding and acquisition agency for ambitious holdings and premium brands.',
  openGraph: {
    title: 'WAgency | Premium Holding Agency',
    description: 'From idea to impact with luxury strategy, systems and execution.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <Loader />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  )
}
