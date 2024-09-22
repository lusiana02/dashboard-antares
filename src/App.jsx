import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [selectedTime, setSelectedTime] = useState('This Month');

  return (
    <div className="flex">
      <Sidebar />
      <MainContent selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
    </div>
  );
}

export default App;