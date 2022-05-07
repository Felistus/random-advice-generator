import { useEffect, useState } from "react";
import useSWR from "swr";
import "./App.css";
import DesktopDivider from "./components/img/DesktopDivider";
import DiceIcon from "./components/img/DiceIcon";
import MobileDivider from "./components/img/MobileDivider";
import Quote from "./components/Quote";
import { getRandomQuote } from "./service/utils";

function App() {
  const [quote, setQuote] = useState<string>();
  const [quoteID, setQuoteID] = useState<string>();
  const baseUrl = "https://api.adviceslip.com/advice";
  useSWR(baseUrl, changeQuote, {
    refreshInterval: 60000,
  });

  async function changeQuote() {
    const newQuote = await getRandomQuote();
    setQuote(newQuote.slip.advice);
    setQuoteID(newQuote.slip.id);
  }
  useEffect(() => {
    changeQuote();
  }, []);
  return (
    <div className="bg-[#1f2632] w-full h-screen flex justify-center items-center">
      <div className="md:w-[500px] w-[375px] bg- font-bold bg-[#323a49] py-8 px-8 rounded-2xl text-center relative">
        <h1 className="text-[#52ffa8] uppercase flex space-x-3 justify-center items-center font-mono">
          <span className="text-[#52ffa8]">advice</span>
          <span className="text-[#52ffa8]"> #{quoteID} </span>
        </h1>
        <div className="max-h-fit">
          <Quote quote={quote as string} />
        </div>
        <div className="w-full justify-center items-center mb-8  hidden md:flex ">
          <DesktopDivider />
        </div>
        <div className="w-full justify-center items-center mb-8 flex md:hidden ">
          <MobileDivider />
        </div>
        <div className="w-full absolute left-0 right-0 flex justify-center items-center">
          <div
            onClick={changeQuote}
            className="box-shadow bg-[#52ffa8] w-14 h-14 rounded-full flex justify-center items-center"
          >
            <DiceIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
