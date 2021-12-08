/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { ThemeColor, TabSetting } from 'components/organisms'
import close from '../../images/close.svg'

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
    <>
      <div style={{ background: themeColor }} css={headerStyle}>
        <img src={close} alt="全件削除" onClick={() => navigate('/')} />
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
