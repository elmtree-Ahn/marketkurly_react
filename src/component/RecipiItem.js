export default function RecipiItem(props) {

  return(
    <div>
      <li className="RecipiItem">
        <a href="javascript:void(0)" className="imgBox">
          <img src={props.imgUrl} alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            {props.name}
          </a>
        </div>
      </li>

    </div>
  )
}