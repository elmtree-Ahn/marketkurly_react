import { useParams } from 'react-router'

export default function Detail(props) {

  let { id } = useParams();

  return (
    <>
      <p>{props.data[id].title}</p>
      <p>선택하신 제품의 상세페이지입니다. </p>
    </>
  )
}