/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import trash from '../../images/trash.png'

type Props = {
  onClickAllDelete: () => void
}

export const Header: React.FC<Props> = ({ onClickAllDelete }) => {
  return (
    <div css={headerStyle}>
      <img src={trash} alt="全件削除" onClick={() => onClickAllDelete()} />
    </div>
  )
}

const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  background: '#afeeee',
  marginBottom: 16,
  img: {
    width: 30,
    height: 30,
  },
})
