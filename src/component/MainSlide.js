import React from 'react';
import Slider from 'react-slick';


export default function MainSlide() {
  const settings = {
    accessibility: true,
    arrows: true,
    infinite: true,  // 무한으로 반복
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,  // 넘어가는 속도
    slidesToShow: 1,  // 4장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    // centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="mainSlide">
        <Slider {...settings}>
          <div className="slideList">
            <a className="slide" style={{ backgroundImage: "url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1631155677.jpg)" }}></a>
          </div>
          <div className="slideList">
            <a className="slide" style={{ backgroundImage: "url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1621561009.jpg)" }}></a>
          </div>
          <div className="slideList">
            <a className="slide" style={{ backgroundImage: "url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg)" }}></a>
          </div>
          <div className="slideList">
            <a className="slide" style={{ backgroundImage: "url(https://img-cf.kurly.com/shop/data/main/1/pc_img_1631686281.jpg)" }}></a>
          </div>

          

      </Slider>  
      </div>
      
    </>
  );
}

