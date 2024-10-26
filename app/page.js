'use client'
import Image from "next/image";
import leftImage from "../image/left2.png";
import rightImage from "../image/right2.png";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const loginkaro = () => {
    redirect('/login')
  };

  return (
    <>
      <header>
        <nav className="flex justify-around items-center h-[3.5em] bg-gradient-to-r from-[#070736] to-[#08084E]">
          <div className="text-xl ml-[-24rem] text-white">BudgetBliss</div>
          <div className="flex items-end h-[3.5em] mr-[-5em]">
            <div className="h-[3.5em] px-4 leading-[3.5em] hover:cursor-pointer hover:bg-[#320D7B]/50 hover:border hover:border-[#8908CF]/40">
              <Link href="/login" className="text-white no-underline hover:text-[#7878DB]">
                Login
              </Link>
            </div>
            <div className="h-[3.5em] px-4 leading-[3.5em] hover:cursor-pointer hover:bg-[#320D7B]/50 hover:border hover:border-[#8908CF]/40">
              <Link href="/signup" className="text-white no-underline hover:text-[#7878DB]">
                Sign up
              </Link>
            </div>
          </div>
        </nav>
        <Image src={rightImage} alt="BudgetBliss Logo" className="w-56 h-56" />
      </header>

      <section className="flex justify-around mt-8 first">
        <div className="leftSection w-[30%] text-4xl mt-20 text-black">
          Welcome to
          <span className="name text-[#329A39]"> BudgetBliss</span>
          <div className="pb-5 text-lg font-medium text-gray-500 text">
            Peace of mind, One budget at a time
          </div>
          <span id="element" className="text-[#3FDA49]">
            What can we do for you?
          </span>
          <div className="mt-8">
            <button
              onClick={loginkaro}
              className="h-12 px-8 font-semibold text-white transition-transform duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-green-500 hover:scale-105 hover:shadow-2xl"
            >
              Get Started!
            </button>
          </div>
        </div>

        <div className="rightSection w-[30%]">
          <Image
            src={leftImage}
            alt="developer image"
            className="h-[55vh] w-[90%] mt-4 filter drop-shadow-[5px_5px_20px_rgba(130,232,48,0.797)]"
          />
        </div>
      </section>

      <footer className="mt-80 bg-gradient-to-r from-[#070736] to-[#08084E]">
        <hr />
        <div className="mt-12 text-center text-white copyright">
          <div className="flex items-center justify-center gap-8 pages">
            <a href="/terms" className="text-white">Conditions of Use</a>
            <a href="/privacy" className="text-white">Privacy Notice</a>
            <a href="/ads-choices" className="text-white">Your Ads Privacy Choices</a>
          </div>
          <div className="pb-4 mt-1 text-white copyright-tag">
            © 1996-2024, budgetbliss.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </>
  );
}
