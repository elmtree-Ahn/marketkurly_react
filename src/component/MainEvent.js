import EvnetItem from './EventItem';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MainEvent(props) {
  return (
    <div className="mainEvent" style={{backgroundColor: 'rgb(247, 247, 247)'}}>
      <div className="inner">
        <h3 className="title">
          특가/혜택 &nbsp; <FontAwesomeIcon icon={faChevronRight} />
        </h3>
        <div className="itemWrap">
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631688770.jpg" name="최대 55% 할인 + 10% 추가 쿠폰 + 선물하기 오픈" desc="지금 주문하면 내일 새벽 도착"/>
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631707303.jpg" name="녹색한우 최대9 20% 할인" desc="국내 최대 규모 한우 브랜드"/>
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631877997.jpg" name="추석 간편식 최대 20% 할인" desc="모둠전부터 송편까지"/>
        </div>
      </div>
    </div>
  )
}