/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import minus from '../../images/minus.png'

import { ListType } from 'models/MemoType'

type Props = {
  list: ListType[][]
  tabNumber: number
  fontSize: string | null
  onClickDelete: (i: number) => void
  onClickCheckBox: (i: number) => void
}

export const List: React.FC<Props> = ({
  list,
  tabNumber,
  fontSize,
  onClickDelete,
  onClickCheckBox,
}) => {
  const _fontSize = (): number => {
    if (fontSize === 'small') return 14
    if (fontSize === 'mideum') return 18
    if (fontSize === 'large') return 22
    return 16
  }

  const _imageSize = (): number => {
    if (fontSize === 'small') return 20
    if (fontSize === 'mideum') return 30
    if (fontSize === 'large') return 40
    return 30
  }

  return (
    <>
      {list[tabNumber] &&
        list[tabNumber].map((v: ListType, i: number) => {
          return (
            <div key={i} css={listStyle} style={{ fontSize: _fontSize() }}>
              <img
                css={deleteStyle}
                style={{ width: _imageSize(), height: _imageSize() }}
                src={minus}
                alt="削除"
                onClick={() => onClickDelete(i)}
              />
              <div css={v.isChecked ? checkedStyle : notCheckedStyle}>
                {v.memo}
              </div>
              <input
                style={{ width: _imageSize(), height: _imageSize() }}
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
  padding: '4px 0',
  margin: '0 auto 8px',
  width: '90%',
  borderBottom: '1px solid #ccc',
  fontWeight: 'bold',
  letterSpacing: 2,
})

const deleteStyle = css({
  marginRight: 32,
})

const checkStyle = css({
  margin: '0 0 0 auto',
})

const checkedStyle = css({
  textDecoration: 'line-through',
  color: '#333',
})

const notCheckedStyle = css(checkedStyle, {
  textDecoration: 'none',
})
