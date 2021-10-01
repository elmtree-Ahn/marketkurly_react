export default function EventBnr(props) {
  return (
    <>
      <div className="eventBnr">
        <a href="javascript:void(0)">
          <img className="bnrImg" src={props.data.urlImg} ></img>
        </a>
      </div>
    </>
  )
}