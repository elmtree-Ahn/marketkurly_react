import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './Item';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductList(props) {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: false,  // 무한으로 반복
    speed: 500,
    
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 4,  // 1장씩 뒤로 넘어가게
    initialSlide: 0,
    centerPadding: '20px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

const icon = 'true';

  return(
    <>
      <div className="productList" style={{backgroundColor:props.bgColor}}>
        <div className="inner">
          <h3 className="title">
            {props.productTitle}
            {
              icon === `${props.icon}`
              ? (<FontAwesomeIcon className="icon" icon={faChevronRight} />)
              : null
            }
            
          </h3>
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
        </div>
      </div>
    </>
  )
}
