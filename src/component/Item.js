export default function Item(props) {

  return(
    <div>
      <li className="item">
        <a href="javascript:void(0)" className="imgBox">
          <img src="url({props.imgUrl})" alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            {props.name}
          </a>
          <div className="salePrice">
            <div className="sale">
              {props.sale}
            </div>
            <div className="price">
              {props.price}
            </div>
          </div>
          <div className="marketPrice">
            {props.marketPrice}
          </div>
        </div>
      </li>

    </div>
  )
}