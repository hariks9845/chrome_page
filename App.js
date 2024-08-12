
import React, { useState } from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import Main from './components/Main';
import Fast from './components/Fast';
import Slide from './components/Slide';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('safe');

  return (
    <div className="App">
      <Header />
      <Tab setActiveTab={setActiveTab} />
      {activeTab === 'safe' && (
        <>
          <Main />
          <Slide />
        </>
      )}
      {activeTab === 'fast' && <Fast />}
      {/* Add more content for other tabs as needed */}
    </div>
  );
}

export default App;
