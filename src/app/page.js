import About from '@/component/About'
import Feature from '@/component/Feature'
import Footer from '@/component/Footer'
import Hero from '@/component/Hero'
import Services from '@/component/Services'
import Stats from '@/component/Stats'

export default function Home() {
  return (
    <>
      <main className="flex w-full min-h-screen flex-col items-center justify-between">
        <Hero />
        <Feature />
        <Services />
        <About />
        <Stats />
      </main>

      <Footer />
    </>
  )
}
