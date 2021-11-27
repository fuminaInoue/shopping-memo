/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'

import { List } from 'components/molecules'
import { InputField } from 'components/molecules'
import { Header } from 'components/molecules'

import { ListType } from 'models/MemoType'

type Props = {}

export const Memo: React.FC<Props> = () => {
  const storageList = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')!)
    : []
  const [list, setList] = useState<ListType[]>(storageList)
  const [newList, setNewList] = useState<string>('')

  const onKeyEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => {
    if (e.key === 'Enter') {
      saveList(newList)
    }
  }

  const saveList = (newList: string) => {
    let _list: Object[] = list
    list.push({ memo: newList, isChecked: false })
    localStorage.setItem('list', JSON.stringify(_list))
    setNewList('')
  }

  const onClickCheckBox = (i: number) => {
    let _list: ListType[] = [...list]
    _list[i]['isChecked'] = !_list[i]['isChecked']
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickDelete = (i: number) => {
    let _list = [...list]
    _list.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickAllDelete = () => {
    const result = window.confirm('すべて削除しますか？')
    if (result) {
      localStorage.removeItem('list')
      setList([])
    }
  }

  return (
    <div css={memoContainerStyle}>
      {/* <Tab /> */}
      <Header onClickAllDelete={onClickAllDelete} />
      <List
        list={list}
        onClickDelete={onClickDelete}
        onClickCheckBox={onClickCheckBox}
      />
      <InputField
        newList={newList}
        setNewList={setNewList}
        onKeyEnter={onKeyEnter}
        saveList={saveList}
      />
    </div>
  )
}

const memoContainerStyle = css({
  height: '100vh',
})
