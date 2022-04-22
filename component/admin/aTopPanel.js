import { useRouter } from 'next/router'
import Link from "next/link"

const aTopPanel = () => {
  const router = useRouter();

  return (
    <ul className="panel-top">
      <li className={router.pathname == "/adminPage/adminPortfolio" ? "panel-top__item--current" : "panel-top__item "}>
        <Link href={`../../adminPage/adminPortfolio`}>
          <a className="panel-top__link">Portfolio</a>
        </Link>
      </li>
      <li className={router.pathname == "/adminPage/adminProfile" ? "panel-top__item--current" : "panel-top__item "}>
        <Link href={`../../adminPage/adminProfile`}>
          <a className="panel-top__link">Profile</a>
        </Link>
      </li>
      <li className={router.pathname == "/adminPage/adminBlog" ? "panel-top__item--current" : "panel-top__item "}>
        <Link href={`../../adminPage/adminBlog`}>
          <a className="panel-top__link">Blog</a>
        </Link>
      </li>
    </ul>
  )
}

export default aTopPanel