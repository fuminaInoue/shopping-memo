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
  const fontSize = localStorage.getItem('fontSize')

  const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveList()
      setShowInputField(true)
    }
  }

  const saveList = () => {
    let _list: Object[][] = list
    _list[tabNumber] = list[tabNumber] ? list[tabNumber] : []
    _list[tabNumber].push({ memo: newList, isChecked: false })
    localStorage.setItem('list', JSON.stringify(_list))
    setNewList('')
    setShowInputField(true)
  }

  const onClickCheckBox = (i: number) => {
    let _list: ListType[][] = [...list]
    _list[tabNumber] = list[tabNumber]

    if (_list[tabNumber][i]['isChecked']) {
      _list[tabNumber][i]['isChecked'] = false
    } else {
      _list[tabNumber][i]['isChecked'] = true
    }

    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickDelete = (i: number, memo: string) => {
    if (!window.confirm(`${memo}を削除しますか？`)) return
    let _list = [...list]
    _list[tabNumber].splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickAllDelete = () => {
    const tabTitles = localStorage.getItem('tabTitles')
      ? JSON.parse(localStorage.getItem('tabTitles')!)
      : []
    const currentTab = tabTitles[tabNumber] ? tabTitles[tabNumber] : 'tab1'
    const result = window.confirm(`${currentTab}をすべて削除しますか？`)
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

  const onClickAddList = () => {
    document.getElementById('inputField')?.focus()
    if (newList !== '') saveList()
    else setShowInputField(true)
  }

  const _imageSize = (): number => {
    if (fontSize === 'small') return 20
    if (fontSize === 'mideum') return 30
    if (fontSize === 'large') return 40
    return 30
  }

  return (
    <div>
      <Tab tabNumber={tabNumber} onCLickTab={onCLickTab} />
      <div css={memoContainerStyle}>
        <Header onClickAllDelete={onClickAllDelete} />
        <div css={listWrapperStyle}>
          <List
            list={list}
            tabNumber={tabNumber}
            fontSize={fontSize}
            onClickDelete={onClickDelete}
            onClickCheckBox={onClickCheckBox}
          />
          {showInputField && (
            <InputField
              newList={newList}
              setNewList={setNewList}
              onKeyEnter={onKeyEnter}
              saveList={saveList}
            />
          )}
          <div css={plusStyle}>
            <img
              style={{ width: _imageSize(), height: _imageSize() }}
              src={plus}
              alt="リスト追加"
              onClick={() => onClickAddList()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const listWrapperStyle = css({
  height: 'calc(100vh - 115px)',
  overflow: 'scroll',
})

const memoContainerStyle = css({
  background: '#fff',
  borderRadius: '0 10px 0 0',
  height: 'calc(100vh - 43px)',
  '@media(min-width: 601px)': {
    height: 'calc(100vh - 86px)',
    borderRadius: '0 10px 10px 10px',
  },
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
