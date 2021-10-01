import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function BasicItem(props) {
  let kurly = props.kurlyOnly
  let { id } = useParams()

  return (
    <li className="basic_item">
      <Link to={'/detail/' + props.adress} className="imgBox">
        <img src={props.url} alt="" />
      </Link>
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