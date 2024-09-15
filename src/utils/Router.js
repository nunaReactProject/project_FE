import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './../pages/Mainpage/Mainpage';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import Login from '../pages/Login/Login';
import SearchPage from '../pages/SearchPage/SearchPage';
import AllProductPage from '../pages/AllProductPage/AllProductPage';
import Nav from '../components/common/Nav/Nav';
import * as S from './Router.styled';
import Register from '../pages/Register/Register';
import TopBanner from '../components/common/TopBanner/TopBanner';
import Mypage from '../pages/Mypage/Mypage';

export default function Router() {
  return (
    <S.PageContainer>
      <TopBanner />
      <Header />
      <Nav />
      <S.Content>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/all' element={<AllProductPage />} />
          <Route path='/detail/:id' element={<DetailProduct />} />
        </Routes>
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}
