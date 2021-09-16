import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import MainSlide from './component/MainSlide';
import ItemList from './component/ItemList';


function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      {/* fontawesome */}
      <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
      <Header />
      <MainSlide />
      <ItemList />
      
    </>
  );
}



export default App;
