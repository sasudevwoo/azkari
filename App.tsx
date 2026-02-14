import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CategoryDetails from './pages/CategoryDetails';
import ZikrView from './pages/ZikrView';
import Stats from './pages/Stats';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/zikr/:id" element={<ZikrView />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </MemoryRouter>
  );
};

export default App;