export default function Footer(props) {
  return(
    <>
    <footer>
      <div className="footer__inner">
        <div className="footer__cs">
          <div className="footer__title">
            고객행복센터
          </div>
          <div className="footer__number csFlex">
            <div className="number">1644-1107</div>
            <div className="csTime">
              <span>365고객센터</span>
              <span className="time">오전 7시 - 오후 7시</span>
            </div>
          </div>
          <div className="footer__kakao csFlex">
            <a href="javascript:void(0)">
              <div className="box">카카오톡 문의</div>
            </a>
            <div className="csTime">
              <span>365고객센터</span>
              <span className="time">오전 7시 - 오후 7시</span>
            </div>
          </div>
          <div className="footer__1:1 csFlex">
            <a href="javascript:void(0)">
              <div className="box">1:1 문의</div>
            </a>
            <div className="csTime">
              <span>24시간 접수 가능</span>
              <span className="time">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</span>
            </div>
          </div>
          <div className="footer__bulkorder csFlex">
            <a href="javascript:void(0)">
              <div className="box">대량주문 문의</div>
            </a>
            <div className="csTime">
              <span className="time">비회원의 경우 메일로 문의 바랍니다.</span>
            </div>
          </div>
        </div>
        <div className="footer__link">
          <ul className="company_list">
            <li>
              <a href="javascript:void(0)">컬리소개</a>
            </li>
            <li>
              <a href="javascript:void(0)">컬리소개영상</a>
            </li>
            <li>
              <a href="javascript:void(0)">인재채용</a>
            </li>
            <li>
              <a href="javascript:void(0)">이용약관</a>
            </li>
            <li>
              <a href="javascript:void(0)">개인정보처리방침</a>
            </li>
            <li>
              <a href="javascript:void(0)">이용안내</a>
            </li>
          </ul>
          <ul className="company_info">
            <li>
              법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 <a href="javascript:void(0)">사업자정보 확인</a>
            </li>
            <li>
              통신판매업 : 제 2018-서울강남-01646 | 개인정보보호책임자 : 이원준
            </li>
            <li>
              주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아
            </li>
            <li>
              입점문의 : <a href="javascript:void(0)">임점문의하기</a> | 제휴문의 : <a href="javascript:void(0)">business@kurlycorp.com</a>
            </li>
            <li>
              채용문의 : <a href="javascript:void(0)">recruit@durlycorp.com</a>
            </li>
            <li>
              팩스 : 070 - 7500 - 6098 | 이메일 : <a href="javascript:void(0)">help@kurlycrop.com</a>        
            </li>
            <li>
              대량주문 문의 : kurlygift@kurlycorp.com
            </li>
            <li className="reserved">
              © KURLY CORP. ALL RIGHTS RESERVED
            </li>
          </ul>
          <div className="company__sns">
            <ul>
              <li>
                <a>
                  <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="" />
                </a>
              </li>
              <li>
                <a>
                  <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="link">
        <a className="link_box" href="javascript:void(0)" >
          <img src="https://res.kurly.com/pc/ico/2001/logo_isms.png" alt="" className="isms" />
          <p className="txt">
              [인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영<br />
              [유효기간] 2019.04.01 ~ 2022.03.31
          </p>
        </a>
        <a className="link_box" href="javascript:void(0)">
          <img src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" alt="" className="eprivacy" />
          <p className="txt">
            개인정보보호 우수 웹사이트 ·<br/>
            개인정보처리시스템 인증 (ePRIVACY PLUS)
          </p>
        </a>
        <a className="link_box" href="javascript:void(0)">
          <img src="https://res.kurly.com/pc/service/main/2009/logo_payments.png" alt="" className="toss" />
          <p className="txt">
            고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br />
            토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
          </p>
        </a>
      </div>
    </footer>
    </>
  )
}