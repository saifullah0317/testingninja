import Image from 'next/image'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <main>
      <Navbar selectedRoute='home'/>
      <section id='first'>
        <div className='bg-yellow h-screen'>
          <div className='mt-20 text-purple'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </section>
      <section id='second'>
        <div className='bg-white h-screen'>aaa</div>
      </section>
    </main>
  )
}
