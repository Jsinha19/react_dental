import { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
import ChatbotWidget from "./components/ChatbotWidget";
import Home from "./pages/Home";

import './App.css'
import Book from './components/Book';
import GetInTouch from './components/GetInTouch';
import Footer from "./components/Footer";
import Loader from './components/Loader';

// import { Loader, Loader2 } from 'lucide-react';
function App() {
  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      //   setShowImg(false)
      // setText(
      //   'hello'
      // )
      setLoading(false)
    }, 6000)

    return () => clearTimeout(timer)

    // return clearTimeout =() => setLoading(false)
  })

  return (
    <>
      <div className="min-h-screen bg-black text-white ">
        {
          loading ? (
            <>
              <div className='flex justify-center items-center'>
                {/* <Loader2 className='animate-spin size-10' /> */}
                <Loader/>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              {/* <HeroSection /> */}
              <ChatbotWidget />
              <Router>
                <Routes>  <Route path="/" element={<Home />} />
                </Routes>
                <Book />
                <GetInTouch />
                <Footer />
              </Router>

            </>
          )
        }
      </div>
    </>
  )
}

export default App
