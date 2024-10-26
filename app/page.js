import Image from "next/image";
import leftImage from "../image/left2.png";
import rightImage from "../image/right2.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex justify-around items-center h-[3.5em] bg-gradient-to-r from-[#070736] to-[#08084E]">
          <div className="text-xl ml-[-24rem] text-white">BudgetBliss</div>
          <div className="flex items-end h-[3.5em] mr-[-5em]">
            <div className="h-[3.5em] px-4 leading-[3.5em] hover:cursor-pointer hover:bg-[#320D7B]/50 hover:border hover:border-[#8908CF]/40">
              <Link
                href="/login"
                className="text-white no-underline hover:text-[#7878DB]"
              >
                Login
              </Link>
            </div>
            <div className="h-[3.5em] px-4 leading-[3.5em] hover:cursor-pointer hover:bg-[#320D7B]/50 hover:border hover:border-[#8908CF]/40">
              <Link
                href="/signup"
                className="text-white no-underline hover:text-[#7878DB]"
              >
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
          </div>
          <div className="rightSection w-[30%]">
            <Image
              src={leftImage}
              alt="developer image"
              className="h-[55vh] w-[90%] mt-4 filter drop-shadow-[5px_5px_20px_rgba(130,232,48,0.797)]"
            />
          </div>
        </section>

      <main className="w-screen bg-blue-700 rounded-3xl">
        

        <hr className="border-0 bg-[#7528E1] h-[0.07em] mx-[5em] mt-[5em]" />

        <section className="second max-w-[80vw] mx-auto mt-4 flex flex-col items-center mb-12">
          <div className="text-[#3FDA49] font-bold text-xl text-center mb-4">
            Here's what we can do for you.
          </div>
          <div className="flex justify-around w-full">
            <div className="w-[30%] h-[10em] bg-white text-[#070736] rounded-lg flex items-center justify-center">
              <span className="p-2 m-2 font-bold text-black drop-shadow-xl">
                Build a SAVINGS PLAN
              </span>
            </div>
            <div className="w-[30%] h-[10em] bg-white text-[#070736] rounded-lg flex items-center justify-center">
              <span className="p-2 m-2 font-bold text-black drop-shadow-xl">
                Build an INVESTMENT PLAN
              </span>
            </div>
          </div>
        </section>

        <footer className="mt-80 bg-gradient-to-r from-[#070736] to-[#08084E]">
          <hr />
          <div className="mt-12 text-center text-black copyright">
            <div className="flex items-center justify-center gap-8 pages">
              <a href="/terms" className="text-black">
                Conditions of Use
              </a>
              <a href="/privacy" className="text-black">
                Privacy Notice
              </a>
              <a href="/ads-choices" className="text-black">
                Your Ads Privacy Choices
              </a>
            </div>
            <div className="pb-4 mt-1 copyright-tag">
              © 1996-2024, budgetbliss.com, Inc. or its affiliates
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
