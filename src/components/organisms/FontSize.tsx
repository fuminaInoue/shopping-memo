/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {}

export const FontSize: React.FC<Props> = ({}) => {
  return (
    <>
      <div css={contentsStyle}>
        <div css={themeStyle}>文字サイズ</div>
        <select css={themeSelectStyle} name="" id="">
          <option value="#afeeee">小</option>
          <option value="#ffe4e1">中</option>
          <option value="#fffff0">大</option>
        </select>
      </div>
    </>
  )
}

const contentsStyle = css({
  padding: '8px 0',
  margin: '0 auto 8px',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
})

const themeStyle = css({
  fontWeight: 'bold',
  fontSize: 18,
})

const themeSelectStyle = css({
  fontSize: 18,
  padding: '0 8px',
  borderRadius: 5,
})
