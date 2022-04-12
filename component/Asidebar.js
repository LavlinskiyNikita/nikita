import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Menu from './menu'

export default function AsideBar() {
  const [clickMenu, setClickMenu] = React.useState(false)

  useEffect (() => {
    const widthWin = window.innerWidth;

    if (widthWin <= 1000) {
    } else {
      setClickMenu(true)
    }
  });

  return (
    <>
    <div className="panel-block">
        <div className="panel-block_container">
          <div className="panel-block_content">

            <div className="panel-block_logo">
              <Link href="/">
                <a>
                  <img src="/nikita.svg" alt="logo" />
                </a>
              </Link>

              <button className={`header__humburger${!clickMenu ? "" : '--active'}`} onClick={() => setClickMenu(!clickMenu)}>
                <span className="header__humburger-line"></span>
                <span className="header__humburger-line"></span>
                <span className="header__humburger-line"></span>
              </button>
            </div>

            {clickMenu ? <Menu></Menu> : null}
            

            <div className="panel-link">
              <div className="panel-link__item"> <a href="http://">instagram</a></div>
              <div className="panel-link__item"> <a href="http://">telegram</a></div>
              <div className="panel-link__item"> <a href="http://">vkontact</a></div>
              <div className="panel-link__item"> <a href="http://">twitter</a></div>
            </div>

            <div className="panel-block__footer">
              <p className="panel-block__email-text">nikitalav21lin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}