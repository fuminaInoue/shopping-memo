/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {}

export const FontSize: React.FC<Props> = ({}) => {
  const changefontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('fontSize', e.target.value)
  }

  const defalutSize = localStorage.getItem('fontSize')

  return (
    <div css={FontSizeStyle}>
      <div css={contentsStyle}>
        <div css={themeStyle}>文字サイズ</div>
        <select
          css={themeSelectStyle}
          defaultValue={defalutSize ? defalutSize : 'mideum'}
          onChange={(e) => changefontSize(e)}
          name=""
          id=""
        >
          <option value="small">小</option>
          <option value="mideum">中</option>
          <option value="large">大</option>
        </select>
      </div>
    </div>
  )
}

const FontSizeStyle = css({
  borderTop: '1px solid #ccc',
})

const contentsStyle = css({
  padding: 16,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
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
