import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecipiItem from './items/RecipiItem';
import InstaItem from './items/InstaItem';

export default function InstaRegram(props) {
  const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: false,  // 무한으로 반복
    speed: 500,
    
    slidesToShow: 6,  // 4장씩 보이게
    slidesToScroll: 4,  // 1장씩 뒤로 넘어가게
    initialSlide: 0,
    centerPadding: '20px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

const icon = 'true';

  return(
    <>
      <div className="instaRegram" style={{backgroundColor:props.bgColor}}>
        <div className="inner">
          <h3 className="title">
            <span>
              인스타그램 고객 후기
            </span>
          </h3>
          <Slider {...settings} className="itemList">
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/242613368_566684171200006_6394685299777877487_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=cek8UgOEYgUAX8MLRxd&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=17c1d36f8f7bf9cd196d8d93d352483a&oe=615085FE"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/241150176_879379666289672_2573706513769318043_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=vxJ-uYlHRikAX8vR1II&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=3181c9f566b178dd0f270cda5958a133&oe=61506DF4"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240991510_859751574659253_135655860033237574_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=5sHTXekBWcUAX9gOVe_&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=8263e107685f4618b0920229b514b94a&oe=6151513D"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240882976_1932599606917730_1367172881734932307_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3PGsGURLaqAAX8Uf-V0&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=4487be11e563688153f19ded9f3db471&oe=61516BF3"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240882976_1932599606917730_1367172881734932307_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3PGsGURLaqAAX8Uf-V0&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=4487be11e563688153f19ded9f3db471&oe=61516BF3"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240648216_166751782201623_3685789328031896190_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=sGzQ21FpSxYAX9d9oeB&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=08a8066ec1443ffe3c71929a182cff41&oe=6150EFD5"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240532990_233005771941811_3617078964819492812_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=OXOa2EJRLiQAX9pW8Eh&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=4419dfadf4d74bc329f50bbbcb987d39&oe=6151C8D5"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/240414686_611491329834980_5155301532047198022_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=78okScc0ndsAX-lWt_r&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=22953ad536f4e13ff3ca406b103acf90&oe=61515D33"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/239296860_381315540183895_595037948610156442_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3BvnmpaaPF8AX9VByPn&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=594d7fb2f67c4353bcee3cbe6a7a704d&oe=61517E95"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/235932349_553644345760967_5847295247988988427_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=z3ikLJrfHBUAX9hxZr-&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=bd846363e2c6d769a0a0fd44cb09e0b2&oe=61514B58"/>
          </Slider>
          <div className="textBox">
            <span className="more">
              더 많은 고객 후기가 궁금하다면?
            </span>
            <a className="instaLink">
              @marketKurly_regram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
