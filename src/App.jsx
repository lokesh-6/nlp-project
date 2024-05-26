import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import UrlDataDisplay from './component/UrlDataDisplay'

function App() {
  const [url, setUrl] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home url={url} setUrl={setUrl} />} />
        <Route path="/display-data" element={<UrlDataDisplay url={url} />} />
      </Routes>
    </Router>
  );
}

export default App;
