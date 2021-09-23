import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import MainSlide from './component/MainSlide';
import ProductList from './component/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSpecial from './component/MainSpecial';
import MainEvent from './component/MainEvent';
import Footer from './component/Footer';
import Banner from './component/Banner';
import CategoryType from './component/CategoryType';


function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      {/* fontawesome */}
      <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
      <Header />
      <MainSlide />
      <ProductList productTitle="이 상품 어때요?" bgColor="white" />
      <MainSpecial />
      <MainEvent /> 
      <ProductList productTitle="놓치면 후회할 가격" bgColor="white" icon='true' />
      <Banner imgUrl="https://img-cf.kurly.com/shop/data/main/5/pc_img_1631862366.jpg"/>
      <CategoryType />
      <Footer />
    </>
  );
}



export default App;
