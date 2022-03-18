import Head from "next/head"
import ContentPost from "../../component/ContenpPost";

export async function getServerSideProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();

  if ( !data ) {
    return {
      notFound: true,
    }
  }

  return {
    props: {content: data}, // will be passed to the page component as props
  }
}

export default function profile({ content }) {
  return (
    <>
      <ContentPost content={content}/>
    </>
  )
}