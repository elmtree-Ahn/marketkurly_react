import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

export default function SignUp() {
  // 코멘트 보여줄까 말까
  const [coment, setComent] = useState(false);
  // 조건에 따라 값 바꾸기
  const [condition, setCondition] = useState('txt');
  // 입력 값 스테이트
  const [id, setid] = useState('');

  // 벨리데이션
  useEffect(() => {
    if (id.length > 0 && id.length < 6 ){
      setCondition('bad')
    }
    else if (id.length >= 6) {
      setCondition('good')
    }
    
  }, [id])

  // 입력 값 변수로 받기
  const inputData = (e) => {
    setid(e.target.value);
  }

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
              <form className="signUpInputList">
                {/* 아이디 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <div className="itemTitle">
                    아이디
                    <span className="redStar">*</span>
                  </div>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <input type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => setComent(true)} onChange={inputData}/>
                    {
                      coment === true
                      ? (
                      <div className="coment">
                        <div className={condition}>
                          6자 이상의 영문 혹은 영문과 숫자를 조합
                        </div>
                        <div className="txt">
                          아이디 중복확인
                        </div>
                      </div>
                      )
                      : null
                    }
                  </div>
                  {/* 버튼 */}
                  <button className="chkBtn">
                    중복확인
                  </button>
                </div>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}