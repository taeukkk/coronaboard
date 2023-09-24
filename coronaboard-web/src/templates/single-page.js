import React from "react"
import { Slide } from "../components/slide"

export default function SinglePage({ pageContext }) {
  const { dataSource } = pageContext
  const { countryByCc, globalStats } = dataSource
  console.log(countryByCc)
  console.log(globalStats)
  //   const { thirdSlideTitle } = dataSource

  return (
    //이 컴포넌트가 렌더링될 형태 반환
    <div>
      <h1>코로나보드</h1>
      {/* <p>createPage로 만들어진 페이지입니다.</p> */}
      {/*문자열로 속성 지정*/}
      <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
      {/* 
      //자바스크립트 문자열로 속성 지정
      <Slide title={"대한민국 지역별 현황"}>
        대한민국 지역별 현황을 보여줍니다.
      </Slide>
      //자바스크립트 변수로 속성 지정
      <Slide title={thirdSlideTitle}>예방 행동 수칙을 보여줍니다.</Slide> */}
    </div>
  )
}
