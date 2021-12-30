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

  const onKeyEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    newList: string,
  ) => {
    if (e.key === 'Enter') {
      saveList(newList)
      setShowInputField(true)
    }
  }

  const saveList = (newList: string) => {
    let _list: Object[][] = list
    _list[tabNumber] = list[tabNumber] ? list[tabNumber] : []
    _list[tabNumber].push({ memo: newList, isChecked: false })
    localStorage.setItem('list', JSON.stringify(_list))
    setNewList('')
    setShowInputField(false)
    notChecked(1)
  }

  const notChecked = (num: number, isAll?: boolean) => {
    let _notChecked: string[] = localStorage.getItem('notChecked')
      ? JSON.parse(localStorage.getItem('notChecked')!)
      : []

    // 全削除の場合はnotCheckedも全削除
    if (isAll) {
      _notChecked[tabNumber] = String(
        Number(_notChecked[tabNumber]) - Number(_notChecked[tabNumber]),
      )
    } else {
      _notChecked[tabNumber] = _notChecked[tabNumber]
        ? String(Number(_notChecked[tabNumber]) + num)
        : '1'
    }

    localStorage.setItem('notChecked', JSON.stringify(_notChecked))
  }

  const onClickCheckBox = (i: number) => {
    let _list: ListType[][] = [...list]
    _list[tabNumber] = list[tabNumber]

    if (_list[tabNumber][i]['isChecked']) {
      _list[tabNumber][i]['isChecked'] = false
      notChecked(1)
    } else {
      _list[tabNumber][i]['isChecked'] = true
      notChecked(-1)
    }

    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
  }

  const onClickDelete = (i: number) => {
    let _list = [...list]
    _list[tabNumber].splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
    setList(_list)
    notChecked(-1)
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
    notChecked(0, true)
  }

  const onCLickTab = (index: number) => {
    setTabNumber(index)
  }

  const onClickAddList = () => {
    setShowInputField(true)
    document.getElementById('inputField')?.focus()
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
            />
          )}
          <div css={plusStyle}>
            <img src={plus} alt="リスト追加" onClick={() => onClickAddList()} />
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
