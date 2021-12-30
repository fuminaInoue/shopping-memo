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
  const notChecked = localStorage.getItem('notChecked')
    ? JSON.parse(localStorage.getItem('notChecked')!)
    : []

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
    <ul css={tabWrapperStyle}>
      {tabs &&
        tabs.map((v: string, index: number) => {
          console.log(notChecked[index])
          return (
            <li
              key={v}
              style={{ background: tabNumber === index ? themeColor : '#ccc' }}
              css={tabNumber === index ? activeTabStyle : tabStyle}
              onClick={() => onCLickTab(index)}
            >
              <div css={tabTitleStyle}>{v}</div>
              {notChecked[index] !== '0' && notChecked[index] !== undefined && (
                <div css={notCheckedMarkStyle}>{notChecked[index]}</div>
              )}
            </li>
          )
        })}
    </ul>
  )
}

const tabWrapperStyle = css({
  display: 'flex',
  alignItems: 'flex-end',
  margin: 0,
  padding: 0,
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
  fontSize: 16,
  background: '#F2FCF9',
  borderRadius: '8px 8px 0 0',
  whiteSpace: 'nowrap',
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const activeTabStyle = css(tabStyle, {
  background: '#72C1DF',
  letterSpacing: 1.6,
})

const tabTitleStyle = css({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})

const notCheckedMarkStyle = css({
  background: '#ff8c00',
  borderRadius: 5,
  padding: 2,
  color: '#fff',
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 2,
  fontSize: 16,
})
