import Link from 'next/link'

const Menu = () => {
  return (
    <>
      <nav className="panel-nav">
        <ul className="panel-nav__menu">
          <li className="panel-nav__item"> <Link href="/"><a>portfolio</a></Link></li>
          <li className="panel-nav__item"> <Link href="/profile"><a>profile</a></Link></li>
          <li className="panel-nav__item"> <Link href="/blog"><a>blog</a></Link></li>
          <li className="panel-nav__item"> <Link href="/contact"><a>contacts</a></Link></li>
          <li className="panel-nav__item"> <Link href="/admin"><a>admin</a></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Menu