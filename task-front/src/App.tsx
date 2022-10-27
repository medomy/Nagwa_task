import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsPage from './features/questions_part/pages/questions_page/questions_page';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<QuestionsPage />} path={'/'} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
