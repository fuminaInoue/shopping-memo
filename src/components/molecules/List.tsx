/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import minus from '../../images/minus.png'

import { ListType } from 'models/MemoType'

type Props = {
  list: ListType[]
  onClickDelete: (i: number) => void
}

export const List: React.FC<Props> = ({ list, onClickDelete }) => {
  const onClickCheckBox = () => {}

  return (
    <>
      {list.map((v: ListType, i: number) => {
        return (
          <div key={i} css={listStyle}>
            <input css={imageStyle} type="checkbox" onClick={onClickCheckBox} />
            <div>{v.memo}</div>
            <img
              css={imageStyle}
              src={minus}
              alt="削除"
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

const imageStyle = css({
  width: 30,
  height: 30,
})
