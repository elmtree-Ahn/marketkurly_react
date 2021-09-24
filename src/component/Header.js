import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function Header() {
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
          <div className="inner makeCenter">
            <a href="javascript:void(0)" className="bnr_delivery">
              <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별 택배 배송안내" />
            </a>
            <ul className="list_menu makeCenter">
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
                  고객센터
                  <img src="	https://res.kurly.com/pc/ico/1908/ico_down_16x10.png" alt="more" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
        {/* logo */}
        <div className="headerLogo">
          <div className="inner">
            <h1 className="logo">
              <Link to="/">
                <a href="javascript:avoid(0)">
                  <img className="logoImg" src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리로고" />
                </a>
              </Link>

            </h1>
          </div>
        </div>
      
      
      
      </header>
    </>
  )
};
