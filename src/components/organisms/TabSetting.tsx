/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import ok from '../../images/ok.png'
import minus from '../../images/minus.png'

type Props = {}

export const TabSetting: React.FC<Props> = ({}) => {
  const [newTabTitle, setNewTabTitle] = useState('')
  const [tabTitles, setTabTitles] = useState([''])
  const list = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')!)
    : []

  const saveTabTitle = () => {
    if (validate()) {
      window.alert('すでに登録されているタブ名です')
      return
    }
    const _tabTitles = JSON.parse(localStorage.getItem('tabTitles')!)
    const newTabTitles: string[] = _tabTitles ? _tabTitles : []
    newTabTitles.push(newTabTitle)
    localStorage.setItem('tabTitles', JSON.stringify(newTabTitles))
    setTabTitles(newTabTitles)
    setNewTabTitle('')
  }

  const validate = () => {
    const _tabTitles = JSON.parse(localStorage.getItem('tabTitles')!)
      ? JSON.parse(localStorage.getItem('tabTitles')!)
      : []
    return _tabTitles.includes(newTabTitle)
  }

  const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveTabTitle()
    }
  }

  const onClickDelete = (i: number) => {
    if (
      !window.confirm(
        `タブ${i + 1}「${tabTitles[i]}」を削除してもよろしいですか？`,
      )
    )
      return
    let _tabTitles = [...tabTitles]
    _tabTitles.splice(i, 1)
    localStorage.setItem('tabTitles', JSON.stringify(_tabTitles))
    setTabTitles(_tabTitles)
    deleteTabList(i)
  }

  const deleteTabList = (i: number) => {
    let _list = [...list]
    _list.splice(i, 1)
    localStorage.setItem('list', JSON.stringify(_list))
  }

  useEffect(() => {
    if (localStorage.getItem('tabTitles')) {
      setTabTitles(JSON.parse(localStorage.getItem('tabTitles')!))
    }
  }, [])

  return (
    <div css={tabSettingStyle}>
      {tabTitles &&
        tabTitles.map((v: string, i: number) => {
          return (
            <div css={contentsStyle}>
              <div css={labelStyle}>タブ{i + 1}</div>
              <div css={titleStyle}>{v}</div>
              <img
                css={deleteStyle}
                src={minus}
                alt="削除"
                onClick={() => onClickDelete(i)}
              />
            </div>
          )
        })}
      <div css={contentsStyle}>
        <div css={labelStyle}>新規タブ名</div>
        <input
          css={tabTitleInputStyle}
          onChange={(e) => setNewTabTitle(e.target.value)}
          value={newTabTitle}
          onKeyPress={(e) => onKeyEnter(e)}
        />
        <img
          css={newTabTitle ? arrowStyle : disabledArrowStyle}
          src={ok}
          alt="上矢印"
          onClick={newTabTitle ? () => saveTabTitle() : undefined}
        />
      </div>
    </div>
  )
}

const tabSettingStyle = css({
  borderTop: '1px solid #ccc',
})

const contentsStyle = css({
  padding: 16,
  margin: '0 auto',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const labelStyle = css({
  fontWeight: 'bold',
  fontSize: 18,
})

const titleStyle = css({
  fontSize: 18,
  letterSpacing: 1,
})

const tabTitleInputStyle = css({
  fontSize: 18,
  padding: '2px 8px',
  borderRadius: 5,
  width: '30%',
})

const deleteStyle = css({
  width: 30,
  height: 30,
})

const arrowStyle = css({
  width: 30,
  height: 30,
})

const disabledArrowStyle = css(arrowStyle, {
  opacity: 0.3,
})
