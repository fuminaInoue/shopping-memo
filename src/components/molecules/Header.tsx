/** @jsxImportSource @emotion/react */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from '@emotion/react'
import trash from '../../images/trash.png'
import setting from '../../images/setting.png'

type Props = {
  onClickAllDelete: () => void
}

export const Header: React.FC<Props> = ({ onClickAllDelete }) => {
  const navigate = useNavigate()
  const themeColor = localStorage.getItem('themeColor')
    ? localStorage.getItem('themeColor')!
    : '#afeeee'

  return (
    <div style={{ background: themeColor }} css={headerStyle}>
      <div css={innerStyle}>
        <img src={trash} alt="全件削除" onClick={() => onClickAllDelete()} />
        <img
          src={setting}
          alt="全件削除"
          onClick={() => navigate('/setting')}
        />
      </div>
    </div>
  )
}

const headerStyle = css({
  padding: '10px 0',
  marginBottom: 16,
  img: {
    width: 30,
    height: 30,
  },
  '@media(min-width: 601px)': {
    borderRadius: '0 10px 0 0',
  },
})

const innerStyle = css({
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
})
