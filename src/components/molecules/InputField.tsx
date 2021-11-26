/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import arrow from '../../images/arrow.svg'

type Props = {
  // list: string[]
  newList: string
  setNewList: React.Dispatch<React.SetStateAction<string>>
  // setList: React.Dispatch<React.SetStateAction<string[]>>
  onKeyEnter: (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => void
  saveList: (newList: string) => void
}

export const InputField: React.FC<Props> = ({
  newList,
  setNewList,
  onKeyEnter,
  saveList,
}) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList(e.target.value)
  }

  return (
    <div css={listStyle}>
      <input
        css={listInputStyle}
        type="text"
        onChange={(e) => onChangeValue(e)}
        onKeyPress={(e) => onKeyEnter(e, newList)}
        value={newList}
      />
      <img
        css={newList ? arrowStyle : disabledArrowStyle}
        src={arrow}
        alt="上矢印"
        onClick={newList ? () => saveList(newList) : undefined}
      />
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

const listInputStyle = css({
  width: '80%',
  height: 40,
  border: 'none',
  fontSize: 16,
  letterSpacing: 2,
  paddingLeft: 16,
})

const arrowStyle = css({
  width: 30,
  height: 30,
})

const disabledArrowStyle = css(arrowStyle, {
  opacity: 0.3,
})
