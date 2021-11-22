import React, { useEffect, useState } from 'react'

import { List } from 'components/molecules'
import { InputField } from 'components/molecules'
import { Header } from 'components/molecules'
type Props = {}

export const Memo: React.FC<Props> = ({}) => {
  const [list, setList] = useState('')
  const [newList, setNewList] = useState('')

  useEffect(() => {
    setList(newList)
  }, [newList])

  return (
    <div>
      {/* <Tab /> */}
      <Header />
      <List />
      <InputField setNewList={setNewList} list={list} />
    </div>
  )
}
