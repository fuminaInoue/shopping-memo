/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import minus from '../../images/minus.png'

type Props = {
  list: string[]
  onClickDelete: (i: number) => void
}

export const List: React.FC<Props> = ({ list, onClickDelete }) => {
  return (
    <>
      {list.map((v: string, i: number) => {
        return (
          <div key={i} css={listStyle}>
            <div>{v}</div>
            <img
              css={listMinusStyle}
              src={minus}
              onClick={() => onClickDelete(i)}
            />
          </div>
        )
      })}
    </>
  )
}

const listStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderRadius: 5,
})

const listMinusStyle = css({
  width: 30,
  height: 30,
})
