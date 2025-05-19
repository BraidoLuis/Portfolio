import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#c2cdda] flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <div className="bg-[#182333] flex-1 overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

