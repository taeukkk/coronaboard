import React from "react"
import { css } from "@emotion/react"

export function Slide(props) {
  //함수형 component 선언
  const { title, children } = props //부모 component에서 전달받은 속성값 호출
  return (
    <div
      css={css`
        text-align: center;
        border-top: 1px solid #aaa;
        padding-top: 40px;
        padding-bottom: 60px;
      `}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}
