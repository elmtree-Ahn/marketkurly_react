export default function BasicItem() {
  
  return (
    <li className="basic_item">
      <a href="javascript:void(0)" className="imgBox">
        <img src="https://img-cf.kurly.com/shop/data/goods/1629443966430l0.jpg" alt="" />
        <div className="deadline">
          <div className="time">14:00:34</div>
          <span>남음</span>
        </div>
        <button src="https://res.kurly.com/pc/ico/2010/ico_cart.svg"></button>
      </a>
      <div className="infoBox">
        <a href="javascript:void(0)" className="itemName">
          [GNC] 제목을 입력하시오
        </a>
        <div className="salePrice">
          <div className="sale">
            66%
          </div>
          <div className="price">
            35,000원
          </div>
        </div>
        <div className="marketPrice">
          40,000원
        </div>
        <div className="coment">
          자유자재로 변신하는 근사한 이층집
        </div>
        <div className="kurlyOnly">
          Kurly Only
        </div>
      </div>
    </li>
  )
}