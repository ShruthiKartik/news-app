import './App.css';

import React , { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {

  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress]=useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" />} />
        <Route path="business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" />} />
        <Route path="science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" />} />
        <Route path="sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" />} />
        <Route path="entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route path="health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" />} />
        <Route path="technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App