/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

type Props = {}

export const ResetButton: React.FC<Props> = ({}) => {
  const [themeColor, setThemeColor] = useState('')

  useEffect(() => {
    if (localStorage.getItem('themeColor')) {
      const theme = localStorage.getItem('themeColor')
      setThemeColor(theme!)
    } else {
      setThemeColor('#afeeee')
    }
  }, [])

  const onClickReset = () => {
    const result = window.confirm('リセットしてよろしいですか？')
    if (result) localStorage.clear()
    window.location.reload()
  }

  return (
    <div
      css={buttonStyle}
      style={{ background: themeColor }}
      onClick={() => onClickReset()}
    >
      リセット
    </div>
  )
}

const buttonStyle = css({
  padding: '4px 0',
  margin: '40px auto 8px',
  width: '50%',
  border: '1px solid #333',
  borderRadius: 10,
  textAlign: 'center',
  fontWeight: 'bold',
  letterSpacing: 1,
})
