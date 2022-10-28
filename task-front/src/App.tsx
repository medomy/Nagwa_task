import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionsPage from './features/questions_part/pages/questions_page/questions_page';
import RankPage from './features/result_part/pages/rank_page';
import ErrorPage from './pages/error_page/error_page';
import AuthPage from './features/log-in/pages/auth_page/auth_page';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthPage />} path={'/'} />
          <Route element={<QuestionsPage />} path={'/test'} />
          <Route element={<RankPage />} path={'/rank'} />
          <Route element={<ErrorPage />} path={'/*'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
