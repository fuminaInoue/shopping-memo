/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import trash from '../../images/trash.png'
import plus from '../../images/plus.png'

type Props = {
  onClickAllDelete: () => void
}

export const Header: React.FC<Props> = ({ onClickAllDelete }) => {
  return (
    <div css={headerStyle}>
      <img src={trash} onClick={() => onClickAllDelete()} />
      <img src={plus} />
    </div>
  )
}

const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  img: {
    width: 30,
    height: 30,
  },
})
