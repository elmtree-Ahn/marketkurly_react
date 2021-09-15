import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {/* font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      <Header />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <div className="bnr_header">
          <div className="inner">
            <a href="javascrit:voi  d(0)">
              지금 가입하고 인기상품 &nbsp;<b>100원</b>에 받아가세요!
              <img src="https://res.kurly.com/pc/ico/1908/ico_arrow_fff_84x84.png" alt="" />
            </a>
            <div className="closeBtn">
              <img src="https://res.kurly.com/pc/ico/1908/ico_close_fff_84x84.png" alt="" />
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default App;
