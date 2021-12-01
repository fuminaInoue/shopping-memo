/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {
  tabNumber: number
  setTabNumber: React.Dispatch<React.SetStateAction<number>>
}

export const Tab: React.FC<Props> = ({ tabNumber }) => {
  return (
    <div css={tabWrapperStyle}>
      <div css={tabNumber === 0 ? activeTabStyle : tabStyle}>tab1</div>
      <div css={tabNumber === 1 ? activeTabStyle : tabStyle}>tab2</div>
      <div css={tabNumber === 2 ? activeTabStyle : tabStyle}>tab3</div>
      <div css={tabNumber === 3 ? activeTabStyle : tabStyle}>tab4</div>
    </div>
  )
}

const tabWrapperStyle = css({
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: 8,
})

const tabStyle = css({
  border: '1px solid #ccc',
  padding: '4px 4px 2px 4px',
  borderBottom: 'none',
  width: '25%',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  background: '#F2FCF9',
})

const activeTabStyle = css(tabStyle, {
  background: '#72C1DF',
  color: '#fff',
  fontSize: 18,
  padding: '8px 8px 8px 8px',
  letterSpacing: 2,
})
