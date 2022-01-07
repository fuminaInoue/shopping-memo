/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import {
  ThemeColor,
  TabSetting,
  FontSize,
  MemoResetButton,
  ResetButton,
} from 'components/organisms'
import close from '../../images/close.png'

type Props = {}

export const Setting: React.FC<Props> = () => {
  const navigate = useNavigate()
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
    <div css={settingStyle}>
      <div style={{ background: themeColor }} css={headerStyle}>
        <img src={close} alt="閉じる" onClick={() => navigate('/')} />
      </div>
      <ThemeColor setThemeColor={setThemeColor} />
      <FontSize />
      <TabSetting />
      <MemoResetButton />
      <ResetButton />
    </div>
  )
}

const settingStyle = css({
  height: '100vh',
  background: '#fff',
  '@media(min-width: 601px)': {
    height: 'calc(100vh - 40px)',
    borderRadius: '10px',
  },
})

const headerStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 10,
  img: {
    width: 30,
    height: 30,
  },
  '@media(min-width: 601px)': {
    borderRadius: '10px 10px 0 0',
  },
})
