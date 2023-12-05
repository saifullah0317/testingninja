import Link from "next/link";
import Image from "next/image";
export default function Navbar({selectedRoute}) {
  function highlightRoute(divRoute){
      if(selectedRoute===divRoute){
          return 'font-bold'
      }
      return 'font-'
  }
  return (
    <nav className="bg-yellow shadow-2xl fixed w-full z-20 top-0 start-0 border-b border-yellow ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/static/logo.png" height={60} width={60} style={{borderRadius:'100px'}} alt="logo"/>
          <span className="text-purple self-center text-2xl font-semibold whitespace-nowrap ">
            testingninja
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-purple rounded-lg md:hidden hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-yellow "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-yellow rounded-lg bg-yellow md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow ">
            <li>
              <Link
                href="/"
                className={`text-purple block py-2 px-3 ${highlightRoute('home')} rounded bg-transparent md:hover:text-purple md:p-0 `}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-purple block py-2 px-3 ${highlightRoute('about')} rounded hover:bg-yellow md:hover:bg-transparent md:hover:text-purple md:p-0 `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className={`text-purple block py-2 px-3 ${highlightRoute('login')} rounded hover:bg-yellow md:hover:bg-transparent md:hover:text-purple md:p-0 `}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className={`text-purple block py-2 px-3 ${highlightRoute('signup')} rounded hover:bg-yellow md:hover:bg-transparent md:hover:text-purple md:p-0 `}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
