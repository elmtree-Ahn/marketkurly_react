import { useParams } from 'react-router'

export default function Detail(props) {

  let { id } = useParams();

  return (
    <>
      <div className="detail">
        <div className="inner">
          <div className="itemView">
            <div className="itemImg">
              <img src={props.data[id].url} alt="" />
            </div>
            <div className="itemInfo">
              <div className="nameBox">
                <div className="name">
                  {props.data[id].title}
                </div>
                <button style={{backgroundImage: "url(https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns_x2.png)"}}></button>
              </div>
              <div className="coment">
                {props.data[id].coment}
              </div>
              <p className="goods_dcinfo">
                회원할인가
              </p>
              <div className="dc">
                <div className="price">
                  {props.data[id].price}
                </div>
                <div className="won">
                  원
                </div>
                <div className="sale">
                  {props.data[id].sale}%
                </div>
              </div>
              <div className="marketPriceBox">
                <div className="marketPrice">
                  {props.data[id].marketPrice}원
                </div>
                <img src="https://res.kurly.com/kurly/ico/2021/question_24_24_c999.svg" alt="물음표" className="ico" />

              </div>
              <span className="notLogin">
                로그인 후 회원할인가와 적립혜택이 제공됩니다.
              </span>
              <div className="infoDetail">
                <div className="item q item__1">
                  판매단위<br/><br/>
                  중량/용량
                </div>
                <div className="item 1 item__1">
                  1박스<br /><br/>
                  60g/2g * 30포
                </div>
                <div className="item q item__2">
                  배송구분
                </div>
                <div className="item item__2">
                  샛별배송/택배배송
                </div>
                <div className="item q item__3">
                  포장타입
                </div>
                <div className="item item__3">
                  상온/종이포장 <br/>
                  <span>택배배송은 에코포장이 스티로폼으로 대체됩니다.</span>
                </div>
                <div className="item q item__4">
                  알레르기정보
                </div>
                <div className="item item__4">
                  - 우유, 대유 함유 <br/>
                  - 특이체질, 알레르기 체질 등은 개인의 따라 과민 반응을 나타낼 수 있으므로 원료를 확인한 후 섭취하십시오
                </div>
                <div className="item q item__5">
                  구매수량
                </div>
                <div className="item item__5">
                  - 1 +
                </div>
              </div>
              <div className="totalPrice">
                총 상품금액 :
                <div className="price">
                  68,000
                </div>
                <span>원</span>
              </div>
              <div className="aboutPoint">
                <div className="yelloBox">
                  적립
                </div>
                <div className="desc">
                  로그인 후, 회원할인가와 적립혜택 제공
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  )
}