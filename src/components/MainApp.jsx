import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import ChapterOne from './ChapterOne.jsx';
import ChapterTwo from './ChapterTwo.jsx';
import ChapterThree from './ChapterThree.jsx';
import Footer from './Footer.jsx';

import './MainApp.scss';


const MainDraft = () => {

  return (
    <div className='MainDraft'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ChapterOne />} />
          <Route path="/two" element={<ChapterTwo />} />
          <Route path="/three" element={<ChapterThree />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default MainDraft ;
