import Image from 'next/image'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main>
      <Navbar selectedRoute='home'/>
      <section id='first'>
        <div className='bg-yellow text-white h-screen'>Turn yourtestsinto success stories
AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</div>
      </section>
      <section id='second'>
        <div className='bg-white h-screen'>aaa</div>
      </section>
    </main>
  )
}
