import './App.css';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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
import MainRecipe from './component/MainRecipe';
import InstaRegram from './component/InstaRegram';
import HeaderMenu from './component/HeaderMenu';
import NewGoods from './component/NewGoods';


function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      {/* fontawesome */}
      <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
      <div className="test"></div>
      <Header />
      <HeaderMenu />

      {/* 메인 */}
      <Route exact path="/">
        <MainSlide />
        <ProductList productTitle="이 상품 어때요?" bgColor="white" />
        <MainSpecial />
        <MainEvent /> 
        <ProductList productTitle="놓치면 후회할 가격" bgColor="white" icon='true' />
        <Banner imgUrl="https://img-cf.kurly.com/shop/data/main/5/pc_img_1631862366.jpg"/>
        <CategoryType />
        <Banner imgUrl="https://img-cf.kurly.com/shop/data/main/7/pc_img_1629448784.jpg"/>
        <ProductList productTitle="지금 가장 핫한 상품" bgColor="white" icon='true' />
        <ProductList productTitle="무거워진 몸, 다시 가볍게!" bgColor="rgb(247, 247, 247)" icon='true' />
        <ProductList productTitle="마감세일" bgColor="white" icon='true'/>
        <ProductList productTitle="365일 최저가 도전" bgColor="rgb(247, 247, 247)" icon='true' desc="최저가 도전, 365일 언제나 알뜰하게"/>
        <ProductList productTitle="식단관리" bgColor="white" icon='true' desc="실패 없는 식단 관리의 비결"/>
        <MainRecipe productTitle="컬리의 레시피" bgColor="white" icon='true'/>
        <InstaRegram />
        <Banner imgUrl="	https://img-cf.kurly.com/shop/data/main/15/pc_img_1629447526.jpg"/>
      </Route>

      {/* 신상품 */}
      <Route path="/new_goods">
        <NewGoods />
      </Route>

      <Footer />
    </>
  );
}



export default App;
