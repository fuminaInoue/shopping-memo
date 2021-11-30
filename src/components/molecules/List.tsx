/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import minus from '../../images/minus.png'

import { ListType } from 'models/MemoType'

type Props = {
  list: ListType[]
  onClickDelete: (i: number) => void
  onClickCheckBox: (i: number) => void
}

export const List: React.FC<Props> = ({
  list,
  onClickDelete,
  onClickCheckBox,
}) => {
  return (
    <>
      {list &&
        list.map((v: ListType, i: number) => {
          return (
            <div key={i} css={listStyle}>
              <img
                css={deleteStyle}
                src={minus}
                alt="削除"
                onClick={() => onClickDelete(i)}
              />
              <div css={v.isChecked ? checkedStyle : notCheckedStyle}>
                {v.memo}
              </div>
              <input
                css={checkStyle}
                type="checkbox"
                checked={v.isChecked}
                onChange={() => onClickCheckBox(i)}
              />
            </div>
          )
        })}
    </>
  )
}

const listStyle = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '8px 0',
  margin: '0 auto 8px',
  width: '90%',
  fontSize: 18,
  borderBottom: '1px solid #ccc',
  fontWeight: 'bold',
  letterSpacing: 2,
})

const deleteStyle = css({
  width: 30,
  height: 30,
  marginRight: 32,
})

const checkStyle = css({
  minWidth: 30,
  height: 30,
  margin: '0 0 0 auto',
})

const checkedStyle = css({
  textDecoration: 'line-through',
  color: '#333',
})

const notCheckedStyle = css(checkedStyle, {
  textDecoration: 'none',
})
