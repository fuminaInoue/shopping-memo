/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {}

export const List: React.FC<Props> = ({}) => {
  const _lists = () => {
    return JSON.parse(localStorage.getItem('list')!)
  }

  const onClickCheckBox = () => {}

  return (
    <div css={listStyle}>
      <div>{_lists()}</div>
      <input css={listCheckStyle} type="checkbox" onClick={onClickCheckBox} />
    </div>
  )
}

const listStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderRadius: 5,
})

const listCheckStyle = css({
  width: 30,
  height: 30,
})
