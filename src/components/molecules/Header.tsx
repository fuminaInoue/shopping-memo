/** @jsxImportSource @emotion/react */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import trash from '../../images/trash.png'
import setting from '../../images/setting.svg'

type Props = {
  onClickAllDelete: () => void
}

export const Header: React.FC<Props> = ({ onClickAllDelete }) => {
  const navigate = useNavigate()

  return (
    <div css={headerStyle}>
      <img src={trash} alt="全件削除" onClick={() => onClickAllDelete()} />
      <img src={setting} alt="全件削除" onClick={() => navigate('/setting')} />
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
