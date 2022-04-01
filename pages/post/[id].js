import Head from "next/head"
import Image from 'next/image'

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {content: data},
  }
}

export default function CardPost({ content }) {

  const {title, url} = content || {};

  return (
    <>
      <Head>
        <title>{`${title} | NIKITA.com`}</title>
      </Head>

      <div className="page-post">
        <div className="page-post__photo">
          <img src={url} alt={title} />
        </div>
        <div className="page-post__derection">
          <h1 className="page-post__title">{title}</h1> 
          <p className="page-post__descr">{title}</p>
        </div>
      </div>
    </>
  )
}