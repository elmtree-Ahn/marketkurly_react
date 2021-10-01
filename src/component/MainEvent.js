import EvnetItem from './items/EventItem';
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
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631688770.jpg" />
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631870900.jpg" name="에델코첸 최대 40% 할인 & GIFT" desc="스텐 주방용품의 명가"/>
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1631877997.jpg" name="추석 간편식 최대 20% 할인" desc="모둠전부터 송편까지"/>
        </div>
      </div>
    </div>
  )
}