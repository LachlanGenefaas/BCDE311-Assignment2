import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import chatBotIcon from "./assets/ChatBotIcon.png";
import "./App.css";

import Header from "./components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import LinkCard from "./components/LinkCard.tsx";
import ChatBot from "./components/ChatBot.jsx";
import FactBar from "./components/FactBar.tsx";
import Event from "./components/Event.jsx";
import PageFooter from "./components/PageFooter.tsx";
import FAQPage from "./components/FAQPage.tsx";

function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Header image={heroImg} />
      <div className="text-block">
        <h1>Prostate Cancer</h1>
        <br></br>
        <p>What is it?</p>
        <br></br>
        <p>
          Prostate cancer is cancer that starts in the prostate, the small gland
          that sits below the bladder and is part of the male reproductive
          system. Like the rest of your body, the prostate is made of tiny
          'building blocks' called cells. Prostate cancer is the abnormal growth
          of these cells into a lump or tumor.
        </p>
      </div>

      <div className="mx-auto mb-30 flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-4 [@media(min-width:900px)]:flex-row">
        <LinkCard image={heroImg} title="My Link" link="#" />
        <LinkCard image={reactLogo} title="My Link" link="#" />
        <LinkCard image={viteLogo} title="My Link" link="#" />
      </div>

      <FactBar />
      <div className="mt-20">
        <h1>Current Events</h1>
        <Event image={heroImg} />
        <Event image={heroImg} />
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="h-[600px] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 bg-[var(--colour-primary)] px-4 py-3 text-white">
              <span className="text-base font-semibold">AI Assistant</span>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="text-xl font-bold transition-opacity hover:opacity-80"
              >
                ×
              </button>
            </div>
            <div className="h-[calc(100%-57px)]">
              <ChatBot />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setChatOpen((open) => !open)}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-transparent shadow-none transition-transform hover:scale-105"
        >
          <img
            src={chatBotIcon}
            alt="AI assistant"
            className="h-15 w-15 object-contain"
          />
        </button>
      </div>
      <PageFooter image={heroImg} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/faq" element={<FAQPage headerImage={heroImg} footerImage={heroImg} />} />
    </Routes>
  );
}

export default App;
