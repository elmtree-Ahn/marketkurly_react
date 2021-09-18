import BasicItem from './BasicItem';
import SpecialItem from './SpecialItem';

export default function MainSpecial() {


  return(
    <>
    
    <div className="mainSpecial">
      <div className="inner">
        <div className="goodsTitle">
          <div className="title">
            <div className="name">
              추석특가
            </div>
            <div className="name__desc">
              소중한 분을 위한 선물, 특가로 준비하세요!
            </div>
          </div>
          <div className="coment">
            <i class="far fa-clock"></i>
            망설이면 늦어요!
          </div>
        </div>
        <div className="goodsList">
          <ul className="list">
            <SpecialItem />
          </ul>
        </div>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/e66717f547.js" crossorigin="anonymous"></script>
    </>
  )
}