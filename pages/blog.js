import Head from 'next/head'

import PostBlog from "../component/post/post_blog"

export async function getStaticProps() {
  const res = await fetch(`${process.env.API__HOST}/post`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  }
}


export default function BLog({ post }) {
  return (
    <>
      <Head>
        <title>blog post |  NIKITA.com</title>
      </Head>
      <div className="blog-content">
        <div className="blog-content__post">
          {post.map(({ id , title, descr, photo }) => (
          <PostBlog
            key={id}
            title={title}
            descr={descr}
            photo={photo}
          />
          ))}
        </div>
        <div className="blog-conent__links">
          <aside className="sidebar__menu">
            <h1 className="sidebar__menuTitle">categories </h1>
            <nav className="menuNav">
              <ul className="menuList">
                <li className="mtnuItem"><a href="" className="sidBarMenuLink">link 1</a></li>
                <li className="mtnuItem"><a href="" className="sidBarMenuLink">link 2</a></li>
                <li className="mtnuItem"><a href="" className="sidBarMenuLink">link 2</a></li>
                <li className="mtnuItem"><a href="" className="sidBarMenuLink">link 4</a></li>
              </ul> 
            </nav> 
          </aside> 
        </div>
      </div> 
    </>
  )
}