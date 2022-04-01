import Head from 'next/head'
import CardProject from '../component/CardProject'

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  if ( !data ) {
    return {  
      notFound: true,
    }
  }

  return {
    props: {contents: data}, 
  }
}

export default function Home({ contents }) {
  return (
    <>
      <Head>
        <title>
          post main page |  NIKITA.com
        </title>
      </Head>

    <div className="cardBlock">
        {contents && contents.map(({ id, title, url }) => (
          <CardProject key={id} id={id} title={title} descr={title} image={url}/>
        ))}
    </div>
    </>
  )
}
