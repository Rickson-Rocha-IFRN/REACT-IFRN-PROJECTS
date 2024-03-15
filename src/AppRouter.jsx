import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index'
import NotFound from './pages/NotFound/index'
import Base from './pages/Base';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base/>}>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
