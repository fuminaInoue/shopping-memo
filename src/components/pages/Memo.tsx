import React, { useState } from 'react'

import { List } from 'components/molecules'
import { InputField } from 'components/molecules'
import { Header } from 'components/molecules'
type Props = {}

export const Memo: React.FC<Props> = ({}) => {
  const initialList = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')!)
    : []
  const [list, setList] = useState<string[]>(initialList)
  const [newList, setNewList] = useState('')

  const onKeyEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => {
    if (e.key === 'Enter') {
      saveList(newList)
    }
  }

  const saveList = (newList: string) => {
    let _list: string[] = list
    list.push(newList)
    localStorage.setItem('list', JSON.stringify(_list))
    setNewList('')
  }

  const onClickDelete = (i: number) => {
    let _list = [...list]
    _list.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickAllDelete = () => {
    localStorage.removeItem('list')
    setList([])
  }

  return (
    <div>
      {/* <Tab /> */}
      <Header onClickAllDelete={onClickAllDelete} />
      <List list={list} onClickDelete={onClickDelete} />
      <InputField
        // setNewList={setNewList}
        // list={list}
        newList={newList}
        setNewList={setNewList}
        // setList={setList}
        onKeyEnter={onKeyEnter}
        saveList={saveList}
      />
    </div>
  )
}
