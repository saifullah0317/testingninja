export default function Footer() {
  return (
    <div>
      <footer className="bg-purple ">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-md font-semibold text-yellow uppercase ">
                Company
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-4">
                  <a href="#" className=" hover:underline hover:text-yellow">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-yellow uppercase">
                Help center
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-yellow uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-yellow uppercase">
                Download
              </h2>
              <ul className="text-white font-medium text-sm">
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-purple  md:flex md:items-center md:justify-between">
            <span className="text-sm text-white  sm:text-center">
              © 2023 <a href="https://flowbite.com/">testingninja™</a> All Rights
              Reserved
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https://www.facebook.com/SaifUllah03024" className="text-white hover:text-yellow ">
                
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ffffff/ios-filled/30/facebook.png"
              alt="phone"
            />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://www.youtube.com/@codinghifi" className="text-white hover:text-yellow ">
                
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ffffff/ios-filled/30/youtube.png"
              alt="phone"
            />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="https://www.linkedin.com/in/saif-ullah-arshad-12b602230" className="text-white hover:text-yellow ">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ffffff/ios-filled/30/linkedin.png"
              alt="phone"
            />
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://github.com/saifullah0317" className="text-white hover:text-yellow">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ffffff/ios-filled/30/github.png"
              alt="phone"
            />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
