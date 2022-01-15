/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

type Props = {
  newList: string
  setNewList: React.Dispatch<React.SetStateAction<string>>
  onKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
  saveList: () => void
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
        id="inputField"
        css={listInputStyle}
        type="text"
        onChange={(e) => onChangeValue(e)}
        onKeyPress={(e) => onKeyEnter(e)}
        onBlur={() => saveList()}
        value={newList}
        enterKeyHint="done"
        autoFocus
      />
    </div>
  )
}

const listStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
  margin: '0 auto',
  width: '90%',
  borderRadius: 5,
})

const listInputStyle = css({
  width: '100%',
  height: 40,
  fontSize: 16,
  letterSpacing: 2,
  paddingLeft: 16,
  borderRadius: 8,
  border: 'none',
})
