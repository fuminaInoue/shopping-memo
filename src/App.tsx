// import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Memo } from 'components/pages/Memo'
import { Setting } from 'components/pages/Setting'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Memo />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  )
}

export default App
