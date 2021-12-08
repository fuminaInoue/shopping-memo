/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import arrow from '../../images/arrow.svg'
import minus from '../../images/minus.png'

type Props = {}

export const TabSetting: React.FC<Props> = ({}) => {
  const [newTabTitle, setNewTabTitle] = useState('')
  const [tabTitles, setTabTitles] = useState([''])

  const saveTabTitle = () => {
    const _tabTitles = JSON.parse(localStorage.getItem('tabTitles')!)
    const newTabTitles: string[] = _tabTitles ? _tabTitles : []
    newTabTitles.push(newTabTitle)
    localStorage.setItem('tabTitles', JSON.stringify(newTabTitles))
    setTabTitles(newTabTitles)
  }

  const onClickDelete = (i: number) => {
    let _tabTitles = [...tabTitles]
    _tabTitles.splice(i, 1)
    localStorage.setItem('tabTitles', JSON.stringify(_tabTitles))
    setTabTitles(_tabTitles)
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
              <div css={themeStyle}>タブ{i + 1}</div>
              <div css={themeStyle}>{v}</div>
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
        <div css={themeStyle}>新規タブ名</div>
        <input
          css={themeInputStyle}
          onChange={(e) => setNewTabTitle(e.target.value)}
        />
        <img
          // css={newList ? arrowStyle : disabledArrowStyle}
          src={arrow}
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
  padding: '8px 0',
  margin: '0 auto 8px',
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
})

const themeStyle = css({
  fontWeight: 'bold',
  fontSize: 18,
})

const themeInputStyle = css({
  fontSize: 18,
  padding: '0 8px',
  borderRadius: 5,
})

const deleteStyle = css({
  width: 30,
  height: 30,
})
