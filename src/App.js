import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import MainSlide from './component/MainSlide';
import ProductList from './component/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      {/* fontawesome */}
      <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
      <Header />
      <MainSlide />
      <ProductList />
      
    </>
  );
}



export default App;
