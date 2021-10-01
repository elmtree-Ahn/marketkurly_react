import BasicItem from './items/BasicItem';
import SpecialItem from './items/SpecialItem';
import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MainSpecial() {


  return(
    <>
    
    <div className="mainSpecial">
      <div className="inner">
        <div className="goodsTitle">
          <div className="title">
            <div className="name">
              추석특가
            </div>
            <div className="name__desc">
              소중한 분을 위한 선물, 특가로 준비하세요!
            </div>
          </div>
          <p className="coment">
            망설이면 늦어요!
          </p>
        </div>
        <div className="goodsList">
          <ul className="list">
            <SpecialItem imgUrl="https://img-cf.kurly.com/shop/data/goods/1625035972902l0.jpg" itemName="[소버스] 면역엔 알로에 베라 (7일분)" sale="73" price="6,750" mkPrice="25,000"/>
            <SpecialItem imgUrl="https://img-cf.kurly.com/shop/data/goods/1618379552204l0.jpg" itemName="[솔가] 오메가-3 700 (60일분) + 쇼핑백 증정" sale="60" price="18,400" mkPrice="46,000"/>
          </ul>
        </div>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
    </>
  )
}