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
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1634718371.jpg" name="소중한식사 최대 15% 할인" desc="판교에서 소문난 반찬가게"/>
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1635211546.jpg" name="미친치즈돈까스 35%!" desc="다시는 없을 최초가격 특가"/>
          <EvnetItem imgUrl="https://img-cf.kurly.com/shop/data/main/3/pc_img_1635213095.jpg" name="컬리 단독상품 특가 최대 55%" desc="끝없는 혜택, 수퍼 세이브 워크"/>
        </div>
      </div>
    </div>
  )
}