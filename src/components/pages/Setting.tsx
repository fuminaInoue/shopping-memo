/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import {
  ThemeColor,
  TabSetting,
  FontSize,
  ResetButton,
} from 'components/organisms'
import close from '../../images/close.png'
import trash from '../../images/trash.png'

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

  const allDelete = () => {
    const result = window.confirm('全てのメモを削除してよろしいですか？')
    if (result) {
      // themeColorやタブの設定は削除しちゃダメ
      localStorage.removeItem('list')
      localStorage.removeItem('notChecked')
    }
  }

  return (
    <div css={settingStyle}>
      <div style={{ background: themeColor }} css={headerStyle}>
        <img src={trash} alt="全件削除" onClick={() => allDelete()} />
        <img src={close} alt="閉じる" onClick={() => navigate('/')} />
      </div>
      <ThemeColor setThemeColor={setThemeColor} />
      <FontSize />
      <TabSetting />
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
  justifyContent: 'space-between',
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
