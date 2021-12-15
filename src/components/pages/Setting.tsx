/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { ThemeColor, TabSetting } from 'components/organisms'
import close from '../../images/close.svg'
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
    if (result) localStorage.removeItem('list')
  }

  return (
    <>
      <div style={{ background: themeColor }} css={headerStyle}>
        <img src={trash} alt="全件削除" onClick={() => allDelete()} />
        <img src={close} alt="閉じる" onClick={() => navigate('/')} />
      </div>
      <ThemeColor setThemeColor={setThemeColor} />
      <TabSetting />
    </>
  )
}

const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  marginBottom: 16,
  img: {
    width: 30,
    height: 30,
  },
})
