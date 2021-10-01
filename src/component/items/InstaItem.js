export default function InstaItem(props) {

  return(
    <div>
      <li className="instaItem">
        <a href="javascript:void(0)" className="imgBox">
          <img src={props.imgUrl} alt="" />
        </a>
      </li>
    </div>
  )
}