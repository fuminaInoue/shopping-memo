import React, { useState } from 'react'

import { List } from 'components/molecules'
import { InputField } from 'components/molecules'
import { Header } from 'components/molecules'
type Props = {}

export const Memo: React.FC<Props> = ({}) => {
  const [list, setList] = useState<string[]>([])
  const [newList, setNewList] = useState('')

  const onKeyEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => {
    if (e.key === 'Enter') {
      let _list: string[] = list
      list.push(newList)
      localStorage.setItem('list', JSON.stringify(_list))
      setNewList('')
    }
  }

  return (
    <div>
      {/* <Tab /> */}
      <Header />
      <List list={list} setList={setList} />
      <InputField
        // setNewList={setNewList}
        // list={list}
        newList={newList}
        setNewList={setNewList}
        // setList={setList}
        onKeyEnter={onKeyEnter}
      />
    </div>
  )
}
