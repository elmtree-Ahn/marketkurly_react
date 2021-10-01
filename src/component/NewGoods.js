import NewGoodsData from "../data/newGoodsData";
import { useState } from 'react'
import BasicItem from './items/BasicItem';
import { Route } from 'react-router';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Detail from './detail/Detail';

export default function NewGoods() {

  let [data, setData] =  useState(NewGoodsData);
  let { adress } = useParams();


  return (
    <>
      <Route> 
        <div className="newGoods">
          <div className="inner">
            <div className="title">
              <span>신상품</span>
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
                      <BasicItem url={data[i].url} title={data[i].title} sale={data[i].sale} price={data[i].price} marketPrice={data[i].marketPrice} coment={data[i].coment} kurlyOnly={data[i].kurlyOnly} adress={data[i].id} key={data[i].id} />
                    </>
                    )
                  })
                }
            </div>
          </div>
        </div>
      </Route>

    </>
  )
}