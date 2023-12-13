import Navbar from "../components/Navbar"
import Price from "../components/Price"
export default function pricing() {
  return (
    <div>
      <Navbar selectedRoute='pricing'/>
      <div className="flex flex-row justify-evenly mt-24">
      <Price/>
      <Price/>
      <Price/>
      </div>
    </div>
  )
}
