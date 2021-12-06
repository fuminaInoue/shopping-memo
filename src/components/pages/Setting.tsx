/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import close from '../../images/close.svg'

type Props = {}

export const Setting: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [themeColor, setThemeColor] = useState('')
  const onChangeThemeColor = (v: string) => {
    localStorage.setItem('themeColor', v)
    setThemeColor(v)
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
    <>
      <div style={{ background: themeColor }} css={headerStyle}>
        <img src={close} alt="全件削除" onClick={() => navigate('/')} />
      </div>
      <div css={contentsStyle}>
        <div css={themeStyle}>テーマカラー</div>
        <select
          css={themeSelectStyle}
          name=""
          id=""
          onChange={(e) => onChangeThemeColor(e.target.value)}
        >
          <option value="#afeeee">ターコイズ</option>
          <option value="#ffe4e1">ローズ</option>
          <option value="#fffff0">アイボリー</option>
          <option value="#9370db">むらさき</option>
          <option value="#808080">グレー</option>
        </select>
      </div>{' '}
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

const contentsStyle = css({
  padding: '8px 0',
  margin: '0 auto 8px',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
})

const themeStyle = css({
  fontWeight: 'bold',
  fontSize: 18,
})

const themeSelectStyle = css({
  fontSize: 18,
  padding: '0 8px',
  borderRadius: 5,
})
