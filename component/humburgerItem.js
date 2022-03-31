import Link from 'next/link'

const HumburgerItem = () =>{
  return (
    <>
        <li className="header__item-menu"><Link href="/index"> <a>portfolio</a> </Link></li>
        <li className="header__item-menu"><Link href="/profile"> <a>profil</a> </Link></li>
        <li className="header__item-menu"><Link href="/blog"> <a>blog</a> </Link></li>
        <li className="header__item-menu"><Link href="/contact"> <a>contacts</a> </Link></li>
        <li className="header__item-menu"><Link href="/admin"> <a>admin</a> </Link></li>
    </>
  )
}

export default HumburgerItem