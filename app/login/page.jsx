import Navbar from "../components/Navbar"
import Login from "../components/Login"
import Footer from "../components/Footer"
export default function login() {
  return (
    <div>
      <Navbar selectedRoute='login' bg="bg-swhite shadow-xl"/>
      <div className="flex items-center justify-center mt-28 mb-12">
      <Login/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
