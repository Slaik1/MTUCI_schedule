import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import Teacher from './components/Teacher/Teacher';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
