import { useEffect, useState } from 'react'
import BasicItem from './items/BasicItem';
import { Route } from 'react-router';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Detail from './detail/Detail';

export default function GoodsPage(props) {


  let { adress } = useParams();
  let [data, setData] =  useState([]);

  useEffect(() => {
    const goodsList = setTimeout(() => {
      setData([
        {
          id : 0,
          url : "https://img-cf.kurly.com/shop/data/goods/1632445842263l0.jpg",
          title : "[아임웰] 굿밸런스 라이트밀 솥밥 2종",
          sale : 5,
          price : "2,600",
          marketPrice : '3,000',
          coment : "따끈하게 즐기는 담백한 한 끼",
          kurlyOnly : false
        },
        {
          id : 1,
          url : "https://img-cf.kurly.com/shop/data/goods/1632363046838l0.jpg",
          title : "[블랙모어스] 바이오C 1000 (30일분)",
          sale : 15,
          price : "13,515",
          marketPrice : "15,900",
          coment : "과학적으로 배합한 3종 비타민C",
          kurlyOnly : true
        },
        {
          id : 2,
          url : "https://img-cf.kurly.com/shop/data/goods/1631863525895l0.jpg",
          title : "[KF365] 한돈 간장양념 돼지불고기 1kg (냉장)",
          sale : 20,
          price : "9,900",
          marketPrice : '11,000',
          coment : "100g 당 가격 : 990원",
          kurlyOnly : true
        },
        {
          id : 3,
          url : "https://img-cf.kurly.com/shop/data/goods/1631496499667l0.jpg",
          title : "[마이비밀] 다이어트 도시락 6종",
          sale : 20,
          price : "3,360",
          marketPrice : '4,200',
          coment : "걱정없는 든든한 한끼",
          kurlyOnly : false
        },
        {
          id : 4,
          url : "https://img-cf.kurly.com/shop/data/goods/1563948119225l0.jpg",
          title : "[스타벅스] by 네스프레소 캡슐 10종",
          sale : 10,
          price : "7,700",
          marketPrice : '8,500',
          coment : "NEW!!! 브렉퍼스트 블렌드 캡슐 NEW!!",
          kurlyOnly : false
        },
        {
          id : 5,
          url : "https://img-cf.kurly.com/shop/data/goods/1631597348901l0.jpg",
          title : "[종가집] 국산콩 두부 반모 200g (부침/찌개 겸용)",
          sale : 30,
          price : "1,540",
          marketPrice : '2,200',
          coment : "남김 없이 활용하는 반모 두부",
          kurlyOnly : true
        },
        {
          id : 6,
          url : "https://img-cf.kurly.com/shop/data/goods/1631770301711l0.jpg",
          title : "[금미옥] 깻잎 김말이",
          sale : 10,
          price : "3,300",
          marketPrice : '3,500',
          coment : "깻잎의 향긋함이 더해진",
          kurlyOnly : true
        },
        {
          id : 7,
          url : "https://img-cf.kurly.com/shop/data/goods/1631506766602l0.jpg",
          title : "[오든든] 구운 주먹밥 5종 (5개입)",
          sale : 10,
          price : "5,850",
          marketPrice : '6,500',
          coment : "취향 따라 골라 먹는 알찬 한 끼",
          kurlyOnly : true
        },
        {
          id : 8,
          url : "https://img-cf.kurly.com/shop/data/goods/156748537289l0.jpg",
          title : "[샐러드판다] 병 샐러드 11종",
          sale : 7,
          price : "5,487",
          marketPrice : '5,900',
          coment : "언제 어디서나 즐기는 고품격 샐러드",
          kurlyOnly : true
        },
        {
          id : 9,
          url : "https://img-cf.kurly.com/shop/data/goods/1604989499192l0.jpg",
          title : "[탄단지] 가벼운 한식 도시락 6종",
          sale : 20,
          price : "3,360",
          marketPrice : '4.200',
          coment : "다채로운 한식메뉴로 즐기는 도시락!",
          kurlyOnly : true
        },
        {
          id : 10,
          url : "https://img-cf.kurly.com/shop/data/goods/1587961338737l0.jpg",
          title : "[더오담] 에어프라이어 돈까스 4종",
          sale : 15,
          price : "2,210",
          marketPrice : "2,600",
          coment : "(신제품 출시) 골라먹는 재미! 에어프라이어로 간편하게",
          kurlyOnly : true
        },
        {
          id : 11,
          url : "https://img-cf.kurly.com/shop/data/goods/1620977210799l0.jpg",
          title : "[홍루이젠] 대만 샌드위치 3종",
          sale : 5,
          price : "2,090",
          marketPrice : '2,200',
          coment : "호밀빵으로 더한 고소함",
          kurlyOnly : false
        },
        {
          id : 12,
          url : "https://img-cf.kurly.com/shop/data/goods/1600134650958l0.jpg",
          title : "[폰타나]",
          sale : 9,
          price : "4,880",
          marketPrice : '5,390',
          coment : "이탈리아 정통 레시피를 담아낸",
          kurlyOnly : false
        },
        {
          id : 13,
          url : "https://img-cf.kurly.com/shop/data/goods/1590138142177l0.jpg",
          title : "[샛별배송] 하이트진로 석수 2L X 6개입",
          sale : 4,
          price : "2,200",
          marketPrice : '2,300',
          coment : "[1개당 약 400원] 미네랄이 담긴 천연 광천수",
          kurlyOnly : false
        },
        {
          id : 14,
          url : "https://img-cf.kurly.com/shop/data/goods/1463994351328l0.jpg",
          title : "[쌜모네키친] 오로라 생연어 (냉장)",
          sale : 13,
          price : "20,010",
          marketPrice : '23,000',
          coment : "집에서 프로처럼 연어회 즐기기",
          kurlyOnly : true
        },
        {
          id : 15,
          url : "https://img-cf.kurly.com/shop/data/goods/1616034284976l0.jpg",
          title : "[Kurly's] 데일리 물티슈 2종",
          sale : 10,
          price : "1,260",
          marketPrice : '1,400',
          coment : "믿고 쓰는 우리 집 물티슈",
          kurlyOnly : true
        },
        {
          id : 16,
          url : "https://img-cf.kurly.com/shop/data/goods/1559292668552l0.jpg",
          title : "[라라스윗] 칼로리가 가벼운 아이스크림 12종",
          sale : 10,
          price : "7,105",
          marketPrice : '7,900',
          coment : "쿠키앤크림 신규 런칭! 다채롭게 즐기는 달콤 한 스푼",
          kurlyOnly : false
        },
        {
          id : 17,
          url : "	https://img-cf.kurly.com/shop/data/goods/1561969780121l0.jpg",
          title : "[프레드] 프로틴 케이크 8종",
          sale : 15,
          price : "3,825",
          marketPrice : '4,500',
          coment : "간편하고 맛있게 먹는 단백질",
          kurlyOnly : true
        },
    ])
  }, 1000)

  return() => {
    clearTimeout(goodsList)    
  }
  }, [])


  return (
    <>
      <Route> 
        <div className="newGoods">
          <div className="inner">
            { data.length > 0
              ?(      
              <>
                <div className="title">
                  <span>{props.title}</span>
                </div>
                <div className="list_ability">
                  <div className="count">
                    총 {data.length}건
                  </div>
                  <div className="categoryList">
                    <li>
                      <a className="bold" href="javascript:void(0)" >
                        추천순
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        신상품순
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        인기상품순
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        혜택순
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        낮은 가격순
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        높은 가격순
                      </a>
                    </li>
                  </div>
                </div>
                <div className="itemWrap">
                  {
                    data.map((a, i) => {
                      return (
                        <>
                          <BasicItem url={a.url} title={data[i].title} sale={data[i].sale} price={data[i].price} marketPrice={data[i].marketPrice} coment={data[i].coment} kurlyOnly={data[i].kurlyOnly} adress={data[i].id} key={data[i].id} />
                        </>
                        )
                      })
                  }
                </div>

              </>
              )
              : <div class="loading">Loading&#8230;</div>
            }
          </div>
        </div>
      </Route>

    </>
  )
}