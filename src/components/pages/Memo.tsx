/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import plus from '../../images/plus.png'

import { List, InputField, Header, Tab } from 'components/molecules'
import { ListType } from 'models/MemoType'

type Props = {}

export const Memo: React.FC<Props> = () => {
  const storageList = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')!)
    : []
  const [list, setList] = useState<ListType[][]>(storageList)
  const [newList, setNewList] = useState('')
  const [tabNumber, setTabNumber] = useState(0)
  const [showInputField, setShowInputField] = useState(false)

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
    setShowInputField(false)
  }

  const onClickCheckBox = (i: number) => {
    let _list: ListType[][] = [...list]
    _list[tabNumber] = list[tabNumber]
    _list[tabNumber][i]['isChecked'] = !_list[tabNumber][i]['isChecked']
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickDelete = (i: number) => {
    let _list = [...list]
    _list[tabNumber].splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickAllDelete = () => {
    const result = window.confirm(`tab${tabNumber + 1}をすべて削除しますか？`)
    if (result) {
      let _list = [...list]
      _list[tabNumber] = []
      localStorage.setItem('list', JSON.stringify(_list))
      setList(_list)
    }
  }

  const onCLickTab = (index: number) => {
    setTabNumber(index)
  }

  return (
    <>
      <div css={memoContainerStyle}>
        <Header onClickAllDelete={onClickAllDelete} />
        <div css={listWrapperStyle}>
          <List
            list={list}
            tabNumber={tabNumber}
            onClickDelete={onClickDelete}
            onClickCheckBox={onClickCheckBox}
          />
          {showInputField && (
            <InputField
              newList={newList}
              setNewList={setNewList}
              onKeyEnter={onKeyEnter}
            />
          )}
          <div css={plusStyle}>
            <img
              src={plus}
              alt="リスト追加"
              onClick={() => setShowInputField(true)}
            />
          </div>
        </div>
      </div>
      <Tab tabNumber={tabNumber} onCLickTab={onCLickTab} />
    </>
  )
}

const listWrapperStyle = css({
  height: 'calc(100vh - 115px)',
  overflow: 'scroll',
})

const memoContainerStyle = css({
  height: 'calc(100vh - 46px)',
})

const plusStyle = css({
  padding: '8px 0',
  margin: '0 auto',
  width: '90%',
  img: {
    margin: '0 0 0 auto',
    display: 'block',
  },
})
