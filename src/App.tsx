import React from 'react';
// import Navbar from './components/Navbar';
import './App.css'; // Ensure global styles are included here
import DynamicSideBar from './components/DynamicSideBar';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* <Navbar /> */}
      <DynamicSideBar/>
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        {/* Main content goes here */}
        <h1>Main Content Area</h1>
      </div>
    </div>
  );
};

export default App;
