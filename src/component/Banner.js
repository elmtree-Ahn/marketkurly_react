export default function Banner(props) {
  return(
    <>
      <div className="bnr__main">
        <a href="javascript:void
        (0)" className="link" style={{backgroundImage: `url(${props.imgUrl})`}}></a>
      </div>
    </>
  )
}

Banner.defaultProps = {
  imgUrl: '	https://img-cf.kurly.com/shop/data/main/7/pc_img_1629448784.jpg',
}