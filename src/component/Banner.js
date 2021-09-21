export default function Banner(props) {
  return(
    <>
      <footer>
        <div className="inner">
          <div className="footer_cc">
            <div className="title">
              고객행복센터
            </div>
            <ul>
              <li>
                <div className="number">
                  1644-1107
                </div>
                <div className="desc">
                  <span>
                    365고객센터
                  </span>
                  <span className="detail">
                    오전 7시 - 오후 7시
                  </span>
                </div>
              </li>
              <li>
                <div className="inquiryBox">
                  카카오톡 문의
                </div>
                <div className="desc">
                  <span>
                    365고객센터
                  </span>
                  <span className="detail">
                    오전 7시 - 오후 7시
                  </span>
                </div>
              </li>
              <li>
                <div className="inquiryBox">
                  1:1 문의
                </div>
                <div className="desc">
                  <span>
                    24시간 접수 가능
                  </span>
                  <span className="detail">
                    고객센터 운영시간에 순차적으로 답변해드리겠습니다.
                  </span>
                </div>
              </li>
              <li>
                <div className="inquiryBox">
                  대량주문 문의
                </div>
                <div className="desc">
                  <span className="detail">
                    비회원의 경우 메일로 문의 바랍니다.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="company"></div>
        </div>
        <div className="footerLink inner"></div>
      </footer>
    </>
  )
}