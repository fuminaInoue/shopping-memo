/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
// import plus from '../../images/plus.png'

type Props = {}

export const Tab: React.FC<Props> = ({}) => {
  return (
    <div css={tabWrapperStyle}>
      <div css={tabStyle}>tab1</div>
      <div css={tabStyle}>tab2</div>
    </div>
  )
}

const tabWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  marginTop: 8,
})

const tabStyle = css({
  border: '1px solid #ccc',
  padding: '8px 8px 6px 8px',
  borderBottom: 'none',
  borderRadius: '10px 10px 0 0',
  width: '20%',
  textAlign: 'center',
})
