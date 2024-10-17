import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

function App() {
  return (

    <div className="max-w-[1400px] w-full">
      <header className="shadow-md fixed w-full bg-blue-100">
        <nav className="flex justify-center p-4">
          <div></div>
          <ul className="flex gap-5 items-center font-semibold text-black">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
          <button></button>
        </nav>
      </header>


      <div className="pt-20">
        <Suspense fallback={<div>Yuklanmoqda...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>

    </div>

  );
}

export default App;
