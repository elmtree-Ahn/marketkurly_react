export default function BasicItem(props) {
  let kurly = props.kurlyOnly
  return (
    <li className="basic_item">
      <a href="javascript:void(0)" className="imgBox">
        <img src={props.url} alt="" />
      </a>
      <div className="infoBox">
        <a href="javascript:void(0)" className="itemName">
          {props.title}
        </a>
        <div className="salePrice">
          <div className="sale">
            {props.sale}%
          </div>
          <div className="price">
            {props.price}원
          </div>
        </div>
        <div className="marketPrice">
          {props.marketPrice}원
        </div>
        <div className="coment">
          {props.coment}
        </div>
        {
          kurly === true
          ? <div className="kurlyOnly">
          Kurly Only
        </div>
          : null
        }
        
      </div>
    </li>
  )
}