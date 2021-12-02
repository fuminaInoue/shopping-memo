/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'

import { List, InputField, Header, Tab } from 'components/molecules'
import { ListType } from 'models/MemoType'

type Props = {}

export const Memo: React.FC<Props> = () => {
  const storageList = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')!)
    : []
  const [list, setList] = useState<ListType[][]>(storageList)
  const [newList, setNewList] = useState<string>('')
  const [tabNumber, setTabNumber] = useState<number>(0)

  const onKeyEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => {
    if (e.key === 'Enter') {
      saveList(newList)
    }
  }

  const saveList = (newList: string) => {
    let _list: Object[][] = list
    _list[tabNumber] = list[tabNumber] ? list[tabNumber] : []
    _list[tabNumber].push({ memo: newList, isChecked: false })
    localStorage.setItem('list', JSON.stringify(_list))
    setNewList('')
  }

  const onClickCheckBox = (i: number) => {
    let _list: ListType[][] = [...list]
    _list[tabNumber] = list[tabNumber]
    _list[tabNumber][i]['isChecked'] = !_list[tabNumber][i]['isChecked']
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
    console.log(i)
  }

  const onClickDelete = (i: number) => {
    let _list = [...list]
    _list[tabNumber].splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  // TODO: 全消しをタブごとにする
  const onClickAllDelete = () => {
    const result = window.confirm('すべて削除しますか？')
    if (result) {
      localStorage.removeItem('list')
      setList([])
    }
  }

  const onCLickTab = (index: number) => {
    setTabNumber(index)
  }

  return (
    <>
      <div css={memoContainerStyle}>
        <Header onClickAllDelete={onClickAllDelete} />
        <List
          list={list}
          tabNumber={tabNumber}
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
      <Tab tabNumber={tabNumber} onCLickTab={onCLickTab} />
    </>
  )
}

const memoContainerStyle = css({
  height: 'calc(100vh - 46px)',
})
