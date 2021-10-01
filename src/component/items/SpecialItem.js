export default function SpecialItem(props) {
  
  return (
    <li className="special_item">
      <a href="javascript:void(0)" className="imgBox">
        <img src={props.imgUrl} alt="" />
        <div className="deadline">
          <div className="time">14:00:34</div>
          <span>남음</span>
        </div>
        <button className="bgSticker">추석특가</button>
      </a>
      <div className="infoBox">
        <a href="javascript:void(0)" className="itemName">
          {props.itemName}
        </a>
        <div className="salePrice">
          <div className="sale">
            {props.sale}%
          </div>
          <div className="price">
            {props.price}원
          </div>
          <div className="marketPrice">
            {props.mkPrice}원
          </div>
        </div>

      </div>
    </li>
  )
}