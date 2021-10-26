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
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/246448844_367072065203298_7776535505334925984_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=RncQ_hPLcSgAX_Eb7Cj&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=6d2ecc81eeb33c9d9689da9b41712de9&oe=617D1A7C"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/246510517_556960308724325_5296658690805021096_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=tsucvz6DVTMAX8xPxox&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=8475a34742ea3f097cfcd26bee3d1231&oe=617BC85D"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/245959634_158926113121287_8586371123343647963_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=CS-YWoNhPrsAX-I-Ycu&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=77f073938b4e269b81d3db85f80a1900&oe=617C485E"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/243228114_733993781333459_5454622583881096388_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=qXGnsc9wOmwAX-RDgJf&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=9a78af02ee59c1a5e28e32b74243c9b3&oe=617C7A8F"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/245123832_842201866469274_1393495244036722771_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=RsHDZ7LPmiAAX8znmXS&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=fd558a7351a8bf5f1f38bac6c4696b9f&oe=617C7AEE"/>
            <InstaItem imgUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/245174200_2692548477706924_2190768802822841025_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=zteetYxOpK4AX_vRzVt&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=0e3dc20b8d27097c099fbf6358db8af0&oe=617D2834"/>
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
