/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {}

export const ResetButton: React.FC<Props> = ({}) => {
  const onClickReset = () => {
    const result = window.confirm('全てのメモと設定を削除してよろしいですか？')
    if (result) localStorage.clear()
    window.location.reload()
  }

  return (
    <div css={buttonWrapperStyle}>
      <div css={buttonStyle} onClick={() => onClickReset()}>
        全てのメモと設定を削除する
      </div>
    </div>
  )
}

const buttonWrapperStyle = css({
  borderTop: '1px solid #ccc',
})

const buttonStyle = css({
  padding: '8px',
  width: '90%',
  margin: '0 auto',
  fontWeight: 'bold',
  letterSpacing: 1,
  fontSize: 18,
})
