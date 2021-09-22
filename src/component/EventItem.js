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

EvnetItem.defaultProps = {
  name: '이름을 입력하세요',
  desc: '설명을 쓰세요.'
}