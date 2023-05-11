import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Board } from './pages/Board/Board';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
