// import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Memo } from 'components/pages/Memo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Memo />} />
      </Routes>
    </Router>
  )
}

export default App
