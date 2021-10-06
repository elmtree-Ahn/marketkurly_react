import { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

export default function SignUp() {
  // 코멘트 보여줄까 말까
  const [idComent, setIdComent] = useState(false);
  const [pwComent, setPwComent] = useState(false);
  const [pwChkComent, setPwChkComent] = useState(false);

  // 조건에 따라 값 바꾸기
  const [idCondition, setIdCondition] = useState('txt');
  const [pwCondition, setPwCondition] = useState('txt')
  const [pwChkCondition, setPwChkCondition] = useState('txt')
  const [buttonCondition, setButtonCondition] = useState('chkBtn');
  
  // 입력 값 스테이트
  const [id, setid] = useState('');
  const [pw, setPw] = useState('');
  const [pwChk, setPwChk] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  // 벨리데이션
  useEffect(() => {
    if (id.length > 0 && id.length < 6 ){
      setIdCondition('bad')
    }
    else if (id.length >= 6) {
      setIdCondition('good')
    }
    
  }, [id])

  // 비밀번호 벨리데이션
  useEffect(() => {
  if (pw.length > 1 && pw.length < 10 ){
    setPwCondition('bad')
  }
  else if (pw.length >= 10) {
    setPwCondition('good')
  }
  
  }, [pw])

  // 비밀번호 확인
  useEffect(() => {
  if (pwChk.length > 0 && pwChk === pw ){
    setPwChkCondition('good')
  }
  else{
    setPwChkCondition('bad')
  }
  
  }, [pwChk])

  // 전화번호 인증 활성화
  useEffect(() => {
    if (phoneNumber.length > 10) {
      setButtonCondition('chkBtn');
    } 
    else {
      setButtonCondition('noneWork');
    }
  })

  // 입력 값 변수로 받기
  const inputIdData = (e) => {
    setid(e.target.value);

  }

  const inputPwData = (e) => {
    setPw(e.target.value);
  }

  const inputPwChkData = (e) => {
    setPwChk(e.target.value);
  }

  const inputPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
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
                  <Namestyle>
                    아이디
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => setIdComent(true)} onChange={inputIdData}/>
                    {
                      idComent === true
                      ? (
                      <div className="coment">
                        <div className={idCondition}>
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
                {/* 비밀번호 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <Namestyle>
                    비밀번호
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="password" placeholder="비밀번호를 입력해주세요" onClick={() => setPwComent(true)} onChange={inputPwData}/>
                    {
                      pwComent === true
                      ? (
                      <div className="coment">
                        <div className={pwCondition}>
                          10자 이상의 입력
                        </div>
                        <div className="txt">영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</div>
                        <div className="txt">
                          동일한 숫자 3개 이상 연속 사용 불가
                        </div>
                      </div>
                      )
                      : null
                    }
                  </div>
                </div>
                {/* 비밀번호 확인 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <Namestyle>
                    비밀번호 확인
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="password" placeholder="비밀번호를 한번 더 입력해주세요" onClick={() => setPwChkComent(true)} onChange={inputPwChkData}/>
                    {
                      pwChkComent === true
                      ? (
                      <div className="coment">
                        <div className={pwChkCondition}>
                          동일한 비밀번호를 입력해주세요.
                        </div>
                      </div>
                      )
                      : null
                    }
                  </div>
                </div>
                {/* 이름 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <Namestyle>
                    이름
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="text" placeholder="이름을 입력해주세요" />
                  </div>
                </div>
                {/* 이메일 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <Namestyle>
                    이메일
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="text" placeholder="예: marketcurly@kurly.com" />
                  </div>
                  <button className="chkBtn">
                    중복확인
                  </button>
                </div>
                {/* 휴대폰 */}
                <div className="signUpItems">
                  {/* 제목 */}
                  <Namestyle>
                    비밀번호
                    <span className="redStar">*</span>
                  </Namestyle>
                  {/* 인풋박스 */}
                  <div className="inputBox">
                    <InputBox type="text" placeholder="숫자만 입력해주세요." onChange={inputPhoneNumber} />
                  </div>
                  <button className={buttonCondition}>
                    인증번호 받기
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

const Namestyle = styled.div`
  width: 159px;
  padding: 10px 0 0 20px;
  font-size: 14px;
  font-weight: 600;
`;

const InputBox = styled.input`
  width: 332px;
  height: 44px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
`;

