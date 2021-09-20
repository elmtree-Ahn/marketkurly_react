export default function EvnetItem(props) {
  return (
    <>
      <li className="eventItem">
        <a href="javascript:void(0)" className="imgBox">
          <img src={props.imgUrl} alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            {props.name}
          </a>
          <div className="itemDesc">
              {props.desc}
          </div>
        </div>
      </li>
    </>
  )
}