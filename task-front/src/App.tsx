import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsPage from './features/questions_part/pages/questions_page/questions_page';
import RankPage from './features/result_part/pages/rank_page';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<QuestionsPage />} path={'/'} />
        <Route element={<RankPage />} path={'/rank'}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
