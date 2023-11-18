import Hero from '@/component/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  )
}
