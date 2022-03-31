import Link from 'next/link'

import HumburgerItem from './humburgerItem'

export default function AsideBar() {
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

              <button className="header__humburger">
                <span className="header__humburger-line"></span>
                <span className="header__humburger-line"></span>
                <span className="header__humburger-line"></span>
              </button>
            </div>

            <nav className="panel-nav">
              <ul className="panel-nav__menu">
                <li className="panel-nav__item"> <Link href="/"><a>portfolio</a></Link></li>
                <li className="panel-nav__item"> <Link href="/profile"><a>profile</a></Link></li>
                <li className="panel-nav__item"> <Link href="/blog"><a>blog</a></Link></li>
                <li className="panel-nav__item"> <Link href="/contact"><a>contacts</a></Link></li>
                <li className="panel-nav__item"> <Link href="/admin"><a>admin</a></Link></li>
              </ul>
            </nav>

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