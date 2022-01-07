/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {}

export const MemoResetButton: React.FC<Props> = ({}) => {
  const onClickMemoReset = () => {
    const result = window.confirm('全てのメモを削除してよろしいですか？')
    if (result) {
      // themeColorやタブの設定は削除しちゃダメ
      localStorage.removeItem('list')
      localStorage.removeItem('notChecked')
    }
  }

  return (
    <div css={buttonWrapperStyle}>
      <div css={buttonStyle} onClick={() => onClickMemoReset()}>
        全てのメモを削除する
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
