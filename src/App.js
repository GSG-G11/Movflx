import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import SearchPage from './Pages/SearchPage';
import SingleMovie from './Pages/SingleMovie';
import Search from './Components/Search';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar setShowSearch={setShowSearch} />
        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:query' element={<SearchPage />} />
          <Route path='/movie/:id' element={<SingleMovie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
