import Head from "next/head"
import Link from 'next/link'
import { useState } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.production.min";

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contnent: data},
  }
}

export default function CardPost({contnent}) {

  const {title, url, LinkSite} = contnent || {}

  return (
    <>
      <Head>
        <title>{`${title} | NIKITA.com`}</title>
      </Head>

      <Link href="/">
          <a className="come-back">come back</a>
      </Link>
      <div className="page-post">
        <div className="page-post__photo">
          <img src={url} alt={title} />
        </div>
        <div className="page-post__derection">
          <h1 className="page-post__title">{title}</h1> 
          <p className="page-post__descr">{title}</p>
          <div className="linkSite">
            <span>site: </span> 
            {
              LinkSite ? <a className="LinkSite" href={`${LinkSite}`} target='_blank'>site</a> : <span className="error-site">Site hosting links not found</span>
            }
            {/* <a className="LinkSite" href={`${LinkSite}`} target='_blank'>site</a> */}
          </div>
        </div>
      </div>
    </>
  )
}