export default function Login() {
  return (
    <>
      <div className="login">
        <div className="inner">
        <div className="title">
          로그인
        </div>
        <form action="">
          <input type="text" size="20" placeholder="아이디를 입력해주세요." className="inputBox"/>
          <input type="password" size="20" placeholder="비밀번호를 입력해주세요." className="inputBox"/>
          <div className="checkBoxList">
            <div className="security">
              <input type="checkbox" />
            보안접속
            </div>
            <div className="searchId">
              <a href="javascript:void(0)" className="id">
                아이디 찾기
              </a>
              <a href="javascript:void(0)">
                비밀번호 찾기
              </a>
            </div>
          </div>

          <button  className="btn login">
            로그인
          </button>
          <button className="btn signup">
            회원가입
          </button>
        </form>
      </div>
      </div>
    </>
  )  
}