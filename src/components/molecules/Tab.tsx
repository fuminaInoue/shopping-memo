/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

type Props = {
  tabNumber: number
  onCLickTab: (index: number) => void
}

export const Tab: React.FC<Props> = ({ tabNumber, onCLickTab }) => {
  const tabs = localStorage.getItem('tabTitles')
    ? JSON.parse(localStorage.getItem('tabTitles')!)
    : ['メモ']
  const [themeColor, setThemeColor] = useState('')

  useEffect(() => {
    if (localStorage.getItem('themeColor')) {
      const theme = localStorage.getItem('themeColor')
      setThemeColor(theme!)
    } else {
      setThemeColor('#afeeee')
    }
  }, [themeColor])

  return (
    <div css={tabWrapperStyle}>
      {tabs &&
        tabs.map((v: string, index: number) => {
          return (
            <div
              key={v}
              style={{ background: tabNumber === index ? themeColor : '#ccc' }}
              css={tabNumber === index ? activeTabStyle : tabStyle}
              onClick={() => onCLickTab(index)}
            >
              {v}
            </div>
          )
        })}
    </div>
  )
}

const tabWrapperStyle = css({
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: 8,
  overflow: 'scroll',
  width: '100%',
})

const tabStyle = css({
  padding: '8px 16px',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderBottom: 'none',
  width: '25%',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  background: '#F2FCF9',
  borderRadius: '8px 8px 0 0',
  whiteSpace: 'nowrap',
})

const activeTabStyle = css(tabStyle, {
  background: '#72C1DF',
  fontSize: 18,
  letterSpacing: 2,
})
