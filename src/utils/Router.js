import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './../pages/Mainpage/Mainpage';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import DetailProduct from '../pages/DetailProduct/DetailProduct';

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/detail/:id' element={<DetailProduct />} />
      </Routes>
      <Footer />
    </>
  );
}
