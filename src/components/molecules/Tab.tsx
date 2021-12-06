/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

type Props = {
  tabNumber: number
  onCLickTab: (index: number) => void
}

export const Tab: React.FC<Props> = ({ tabNumber, onCLickTab }) => {
  const tabs = ['tab1', 'tab2', 'tab3', 'tab4']
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
      {tabs.map((v, index) => {
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
})

const tabStyle = css({
  padding: '4px 4px 2px 4px',
  border: '1px solid #333',
  borderBottom: 'none',
  width: '25%',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  background: '#F2FCF9',
  borderRadius: '8px 8px 0 0',
})

const activeTabStyle = css(tabStyle, {
  background: '#72C1DF',
  fontSize: 18,
  padding: '8px 8px 8px 8px',
  letterSpacing: 2,
})
