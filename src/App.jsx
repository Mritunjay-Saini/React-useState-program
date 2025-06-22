import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import Tweet from './tweet';
import Apidata from './Apidatafetch';
import EmojiWithText from './EmojiwithText';
import MultipleInputsConvertingInArrayOfObjects from './MutlipleinputConvertingArrayofObject';
import AutoRefreshClock from './AutoRefreshClock';
import OnlineStatusChecker from './OnlineStatusChecker';
import FormAutoSaver from './FormAutoSaver';
import Greeting from './Greeting';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const totalMinutes = hours * 60 + minutes;
      const darkModeStart = 1 * 60 + 20;

      if (totalMinutes >= darkModeStart) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className={isDarkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <nav className="p-4 bg-gray-500 flex space-x-4 border-2 border-solid">
          <Link to="/" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">Counter</Link>
          <Link to="/greet" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">Greeting</Link>
          <Link to="/tweet" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">Tweet</Link>
          <Link to="/api" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">API Data</Link>
          <Link to="/emoji" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">Emoji</Link>
          <Link to="/form" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">Form</Link>
          <Link to="/AutoRefreshClock" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">AutoRefreshClock</Link>
          <Link to="/OnlineStatusChecker" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">OnlineStatusChecker</Link>
          <Link to="/FormAutoSaver" className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">FormAutoSaver</Link>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/greet" element={<Greeting />} />
            <Route path="/tweet" element={<Tweet />} />
            <Route path="/api" element={<Apidata />} />
            <Route path="/emoji" element={<EmojiWithText />} />
            <Route path="/form" element={<MultipleInputsConvertingInArrayOfObjects />} />
            <Route path="/AutoRefreshClock" element={<AutoRefreshClock />} />
            <Route path="/OnlineStatusChecker" element={<OnlineStatusChecker />} />
            <Route path="/FormAutoSaver" element={<FormAutoSaver />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
