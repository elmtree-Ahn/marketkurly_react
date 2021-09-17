import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from './Item';

export default function ProductList() {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  // 넘어가는 속도
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 4,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return(
    <>
      <div className="productList" style={{backgroundColor:"white"}}>
        <div className="inner">
          <h3 className="title">
            이 상품 어때요?
          </h3>
          <Slider {...settings} className="itemList">
            <Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1598838893688l0.jpg" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
            <Item imgUrl="" name="" slae="" price="" marketPrice="" />
          </Slider>
        </div>
      </div>
    </>
  )
}
