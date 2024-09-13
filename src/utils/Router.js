import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './../pages/Mainpage/Mainpage';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import Login from '../pages/Login/Login';
import AllProductPage from '../pages/AllProductPage/AllProductPage';
import Nav from '../components/common/Nav/Nav';
import * as S from './Router.styled';
import SearchPage from '../pages/SearchPage/SearchPage';

export default function Router() {
  return (
    <S.PageContainer>
      <Header />
      <Nav />
      <S.Content>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/all' element={<AllProductPage />} />
        </Routes>
      </S.Content>
      <Footer />
    </S.PageContainer>
  );
}
