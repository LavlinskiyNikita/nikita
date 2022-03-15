import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
            </div>

            <nav className="panel-nav">
              <ul className="panel-nav__menu">
                <li className="panel-nav__item">portfolio</li>
                <li className="panel-nav__item">profile</li>
                <li className="panel-nav__item">blog</li>
                <li className="panel-nav__item">contacts</li>
                <li className="panel-nav__item">admin</li>
              </ul>
            </nav>

            <div className="panel-link">
              <div className="panel-link__item">instagram</div>
              <div className="panel-link__item">telegram</div>
              <div className="panel-link__item">vkontact</div>
              <div className="panel-link__item">twitter</div>
            </div>

            <div className="panel-block_footer">
              <p className="panel-block__email-text">nikitalav21lin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
