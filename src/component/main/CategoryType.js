import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from '../items/Item';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CategoryType(props) {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: false,  // 무한으로 반복
    speed: 500,
    
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 4,  // 1장씩 뒤로 넘어가게
    initialSlide: 0,
    centerPadding: '20px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };


  return (
    <>
      <div className="categoryType" style={{backgroundColor:props.bgColor}}>
        <div className="inner">
          <h3 className="title">
            MD의 추천
          </h3>
          <div className="categoryMenu">
            <ul className="listCategory">
              <li className="menu first">
                <a href="javascript:void(0)">
                  채소
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  과일·견과·쌀
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  수산·해산·건어물
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  정육·계란
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  국·반찬·메인요리
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  샐러드·간편식
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  면·양념·오일
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  생수·음료·우유·커피
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  간식·과자·떡
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  베이커리·치즈·델리
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  건강식품
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  생활용품·리빙·캠핑
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  스킨헤어·메이크업
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  헤어·바디·구강
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  주방용품
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  가전제품
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  베이비·키즈
                </a>
              </li>
              <li className="menu">
                <a href="javascript:void(0)">
                  반려동물
                </a>
              </li>
            </ul>
          </div>
          <Slider {...settings} className="itemList">
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1567563159964l0.jpg" name="[유기방아] 떡볶이떡 & 떡국떡 (냉동)" sale="10" price="3,870" marketPrice="4,300" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1590727808213l0.jpg" name="[풀무원] 생면식감 꽃게탕면" sale="21" price="4,305" marketPrice="8,600" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1479090685511l0.jpg" name="무농약 산딸기 250g (냉동)" sale="5" price="7,077" marketPrice="7,450" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1623996383387l0.jpg" name="친환경 햇 양파 1kg" sale="17" price="2,481" marketPrice="2,990" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1518511404883l0.jpg" name="[우리밀] 참깨 꼬소봉" sale="20" price="2,380" marketPrice="3,000" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/big/201510/427_shop1_503262.jpg" name="[쯔베르겐 비제] 유기농 토마토 케첩" sale="5" price="8,000" marketPrice="8,500" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/big/201512/712_shop1_185479.jpg" name="[존쿡 델리미트] 엔듀이 소시지 320g" sale="15" price="5,508" marketPrice="6,480" />
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1599116704940l0.jpg" name="[우리밀] 전병 모음" sale="19" price="20,250" marketPrice="25,000" />
          </Slider>
          <div className="moreBtn">
            <a href="javascript:void(0)">채소 전체보기 <FontAwesomeIcon className="icon" icon={faChevronRight} /></a>
          </div>
        </div>
      </div>
    </>
    
  )
}