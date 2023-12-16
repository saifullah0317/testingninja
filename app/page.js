"use client";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarClass = isScrolled ? "bg-white shadow-2xl" : "bg-yellow";
  return (
    <main>
      <Navbar selectedRoute="home" bg={navbarClass} />
      <div className="h-24 bg-yellow"></div>
      <section id="first">
        <div className="bg-yellow flex flex-col lg:flex-row md:flex-row justify-evenly items-center">
          <div className="w-2/3 lg:w-1/3 md:w-1/3 ml-5 text-left">
            <div className="text-white font-bold text-4xl mb-5">
              Turn your <span className="text-purple">assessments</span> into
              success stories
            </div>
            <div className="text-white text-xl mb-10">
              AI-powered skills and knowledge assessment software, serving 2.5M+
              business and educational users worldwide.
            </div>
            <button className="bg-purple text-white px-5 py-3 font-semibold rounded-lg ">
              Sign up - its free
            </button>
          </div>
          <div>
            <div className="p-5">
              <img
                style={{ borderRadius: "5%" }}
                src="https://www.testportal.net/img/2438x1808/787b387f05/hero-app-screen-v2-en-5.png"
                alt="app"
                height="250"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray flex lg:flex-row md:flex-row flex-col py-6 px-5 justify-evenly">
        <div className="flex flex-col mb-5">
          <span className="text-purple text-xl font-bold">
            Here to take a test?
          </span>
          <span className="text-darkgray">
            Enter your email address and test access-key.
          </span>
        </div>
        <div className="h-26">
          <button className="bg-purple text-white px-5 py-3 font-semibold rounded-lg ">
            Attempt test
          </button>
        </div>
      </section>
      <section id="second">
        <div className="h-20" />
        <div className="bg-white flex flex-col lg:flex-row md:flex-row justify-evenly items-center">
          <div className="w-2/3 lg:w-1/3 md:w-1/3 ml-5 text-left">
            <div className="text-purple font-bold text-4xl mb-5">
              We make it easy for Corporates and Educational Sectors
            </div>
            <div className="text-purple text-xl mb-10">
              Generative testing is aiding both corporate and educational
              institutions by automating the generation of test cases and data.
              In corporate settings, it accelerates software testing processes,
              improving product quality and reducing time-to-market. In
              educational institutes, it facilitates the creation of diverse and
              challenging assessments, enhancing the learning experience and
              assessment accuracy.
            </div>
          </div>
          <div>
            <div className="p-5">
              <img
                style={{ borderRadius: "5%" }}
                src="https://www.testportal.net/img/2438x1808/787b387f05/hero-app-screen-v2-en-5.png"
                alt="app"
                height="250"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray flex lg:flex-row md:flex-row flex-col py-6 px-5 justify-evenly">
        <div className="flex flex-col mb-5">
          <span className="text-purple text-xl font-bold">
            Want to generate test?
          </span>
          <span className="text-darkgray">
            Sign up for free and generate test questions.
          </span>
        </div>
        <div className="h-26">
          <button className="bg-purple text-white px-5 py-3 font-semibold rounded-lg ">
            Generate test
          </button>
        </div>
      </section>
      <section id="third">
        <div className="h-20" />
        <div className="bg-white flex flex-col lg:flex-row md:flex-row justify-evenly items-center">
          <div>
            <div className="p-5">
              <img
                style={{ borderRadius: "5%" }}
                src="https://www.testportal.net/img/2438x1808/787b387f05/hero-app-screen-v2-en-5.png"
                alt="app"
                height="250"
                width="500"
              />
            </div>
          </div>
          <div className="w-2/3 lg:w-1/3 md:w-1/3 ml-5 text-left">
            <div className="text-purple font-bold text-4xl mb-5">
              Match with the best testing agency
            </div>
            <div className="text-purple text-xl mb-10">
              Our verified partner Recruitment Agents who earn an average of
              4.8/5 stars from companies and institutes.
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-24">
        <Contactus />
      </section>
      <Footer />
    </main>
  );
}
