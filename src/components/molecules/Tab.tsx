/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {
  tabNumber: number
  onCLickTab: (index: number) => void
}

export const Tab: React.FC<Props> = ({ tabNumber, onCLickTab }) => {
  const tabs = ['tab1', 'tab2', 'tab3', 'tab4']

  return (
    <div css={tabWrapperStyle}>
      {tabs.map((v, index) => {
        return (
          <div
            key={v}
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
  borderRadius: '8px 8px 0 0',
})
