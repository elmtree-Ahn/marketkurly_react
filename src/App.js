import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <Header />
    </>
  );
}

// 헤더
function Header() {
  let [onOffBtn, setOnOffBtn] = useState(true);
  

  return (
    <>
      <header>
        {/* bnr_header  */}
        {
          onOffBtn === true
          ? (
            <div className="bnr_header">
              <div className="inner">
                <a href="javascrit:void(0)">
                  지금 가입하고 인기상품 &nbsp;<b>100원</b>에 받아가세요!
                  <img src="https://res.kurly.com/pc/ico/1908/ico_arrow_fff_84x84.png" alt="" />
                </a>
                <a className="closeBtn" href="javascript:void(0)" onClick={()=>{setOnOffBtn(false)}}>
                  <img src="https://res.kurly.com/pc/ico/1908/ico_close_fff_84x84.png" alt="" />
                </a>
              </div>
            </div>
          )
          : null
        }
        {/* userMenu */}
        <div className="userMenu">
          <div className="inner">
            <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별 택배 배송안내" />
            <ul className="list_menu">
              <li className="menu">
                <a href="javascript:void(0)" className="link_menu join">
                  회원가입
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)" className="link_menu login">
                  로그인
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)" className="link_menu menu_list">
                  고객신터
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default App;
