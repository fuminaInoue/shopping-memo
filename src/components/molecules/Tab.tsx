/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

import { ListType } from 'models/MemoType'

type Props = {
  tabNumber: number
  onCLickTab: (index: number) => void
}

export const Tab: React.FC<Props> = ({ tabNumber, onCLickTab }) => {
  const tabs = localStorage.getItem('tabTitles')
    ? JSON.parse(localStorage.getItem('tabTitles')!)
    : ['メモ']
  const [themeColor, setThemeColor] = useState('')

  const _notChecked = (index: number) => {
    if (!localStorage.getItem('list')) return 0
    const list = JSON.parse(localStorage.getItem('list')!)
    if (!list[index]) return 0
    const notCheckedList = list[index].filter((v: ListType) => !v.isChecked)
    return notCheckedList.length
  }

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
          return (
            <li
              key={v}
              style={{ background: tabNumber === index ? themeColor : '#ccc' }}
              css={tabNumber === index ? activeTabStyle : tabStyle}
              onClick={() => onCLickTab(index)}
            >
              <div css={tabTitleStyle}>{v}</div>
              {_notChecked(index) !== 0 && (
                <div css={notCheckedMarkStyle}>{_notChecked(index)}</div>
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
  boxShadow: '3px 0px 6px 0px rgba(0, 0, 0, 0.45)',
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
  width: 18,
  height: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 2,
  fontSize: 16,
})
