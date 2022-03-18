import { Head } from "next/head";

function ContentPost(content) {

  const {title, url} = content || {};
  
  return (
    //  поменять title на decr если это не обходимо
    <>
    <Head>
      <title>{`${title} | NIkitaa.com`}</title>
    </Head>
    <div className="page-post">
      <div className="page-post__photo">
        <img width={600} src={url} alt={title} />
      </div>
      <div className="page-post__derection">
        <h1 className="page-post__title">{title}</h1> 
        <p className="page-post__descr">{title}</p>
      </div>
    </div>
    </>
  )
}

export default ContentPost();