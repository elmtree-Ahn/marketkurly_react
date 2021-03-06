import './App.css';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import MainSlide from './component/main/MainSlide';
import ProductList from './component/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSpecial from './component/MainSpecial';
import MainEvent from './component/MainEvent';
import Footer from './component/main/Footer';
import Banner from './component/items/Banner';
import CategoryType from './component/main/CategoryType';
import MainRecipe from './component/MainRecipe';
import InstaRegram from './component/InstaRegram';
import HeaderMenu from './component/main/HeaderMenu';

import Event from './component/event/Event';
import Login from './component/login/Login';
import Detail from './component/detail/Detail';
import GoodsData from "./data/GoodsData";
import GoodsPage from './component/GoodsPage';
import SignUp from './component/signup/Signup';


function App() {
  let [data, setData] =  useState(GoodsData);

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
        <GoodsPage title="신상품" />
      </Route>
      {/* 베스트 */}
      <Route path="/best_goods">
        <GoodsPage title="베스트" />
      </Route>
      {/* 특가/혜택 */}
      <Route path="/event">
        <Event />
      </Route>
      {/* 로그인 */}
      <Route path="/login">
        <Login />
      </Route>
      {/* 상세페이지 */}
      <Route path="/detail/:id">
        <Detail data={data}/>
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>

      {/* 푸터 */}
      <Footer />
    </>
  );
}



export default App;
