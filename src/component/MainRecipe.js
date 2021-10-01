import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipiItem from './items/RecipiItem';

export default function MainRecipe(props) {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: false,  // 무한으로 반복
    speed: 500,
    
    slidesToShow: 3,  // 4장씩 보이게
    slidesToScroll: 2,  // 1장씩 뒤로 넘어가게
    initialSlide: 0,
    centerPadding: '20px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

const icon = 'true';

  return(
    <>
      <div className="MainRecipe" style={{backgroundColor:props.bgColor}}>
        <div className="inner">
          <h3 className="title">
            <span>
              {props.productTitle}
              {
                icon === `${props.icon}`
                ? (<FontAwesomeIcon className="icon" icon={faChevronRight} />)
                : null
              }
            </span>
            <div className="desc">
            {props.desc}
            </div>
            
          </h3>

          <Slider {...settings} className="itemList">
            <RecipiItem imgUrl="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_806604d8d6ddc10c.jpg" name="길거리 계란 토스트" />
            <RecipiItem imgUrl="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_02ac877dfaa1572f.jpg" name="제주식 고사리 육개장" />
            <RecipiItem imgUrl="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_d84cc1aba13fb460.jpg" name="레이어드 초밥" />
            <RecipiItem imgUrl="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_52209e7b27906914.jpg" name="그릭 복숭아" />
            <RecipiItem imgUrl="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_8ba32a3f9bb39517.jpg" name="바질 토마토 에그인헬" />
            </Slider>
        </div>
      </div>
    </>
  )
}
