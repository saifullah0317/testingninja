import Navbar from "../components/Navbar"
import Signup from "../components/Signup"
import Footer from "../components/Footer"
export default function login() {
  return (
    <div>
      <Navbar selectedRoute='signup' bg="bg-white shadow-xl"/>
      <div className="flex items-center justify-center mt-28 mb-12">
      <Signup/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
