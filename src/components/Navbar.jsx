import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between bg-red-400 rounded-b-xl p-5">
        <div className="">
          <Link to='/'><p>HIA</p></Link>
        </div>
        <div className="flex flex-row gap-5">
          <Link to='/' className="text-white hover:text-black">Home</Link>
          <Link to='/login' className="text-white hover:text-black">Login</Link>
        </div>
      </nav>
    </div>
  )
}
