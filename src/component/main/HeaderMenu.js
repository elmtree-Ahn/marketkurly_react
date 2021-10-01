import { Link, Route, Switch } from 'react-router-dom';

export default function HeaderMenu(){
  return(
    <div className="headerMenu">
      <div className="inner">
        <ul className="menu_list">
          <li className="menu menu1">
            <a href="javascrip:void(0)">
              <img src="https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off_x2.png" alt="햄버거" />
              전체 카테고리
            </a>
          </li>
          <li className="menu menu2">
            <Link to="/new_goods">
              <a href="javascrip:void(0)">
                신상품
              </a>
            </Link>
          </li>
          <li className="menu menu3">
            <Link to="/best_goods">
              <a href="javascrip:void(0)">
                베스트
              </a>
            </Link>
          </li>
          <li className="menu menu4">
            <a href="javascrip:void(0)">
              알뜰쇼핑
            </a>
          </li>
          <li className="menu menu5">
            <Link to="/event">
              <a href="javascrip:void(0)">
                특가/혜택
              </a>
            </Link>
          </li>
        </ul>
        <div className="search">
          <form action="">
            <input type="text" placeholder="검색어를 입력해주세요."/>
            <img src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" alt="serchIcon" />
          </form>
        </div>
        <div className="location">
          <a href="javascript:void(0)">
            <img className="menuIcons" src="https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1" alt="location" />
          </a>
        </div>
        <div className="cart">
          <a href="javascript:void(0)">
            <img className="menuIcons" src="https://res.kurly.com/pc/service/common/2011/ico_cart.svg" alt="cart" />
          </a>
        </div>
      </div>
    </div>

  )
}