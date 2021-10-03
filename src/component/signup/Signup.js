export default function SignUp() {
  return (
    <>
      <div className="signUp" >
        <div className="inner">
          <h3 className="title">
            <span>
              회원가입
            </span>
          </h3>
          <div className="content">
            <div className="content_inner">
              <div className="pageSub">
                <span className="redStar">*</span>
                필수입력사항
              </div>
              <div className="line"></div>
              <div className="signUpInputList">
                {/* 아이디 */}
                <div className="signUpItems">
                  <div className="title">
                    아이디
                    <span className="redStar">*</span>
                  </div>
                  <div className="inputBox">
                    <input type="text" />
                    <span>6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                  </div>
                
                <input type="text" />

              </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}