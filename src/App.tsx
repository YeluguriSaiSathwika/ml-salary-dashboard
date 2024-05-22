// src/App.tsx
import React from 'react';
import MainTable from './components/MainTable';
import LineGraph from './components/LineGraph';
import ChatApp from './components/ChatApp';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app-component">
      <MainTable />
      <LineGraph />
      <ChatApp />
    </div>
  );
};

export default App;

