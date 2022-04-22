import axios from "axios";
import Head from 'next/head'
import React, { useState, useEffect} from 'react';
import CardProject from '../component/CardProject'

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit10&_page=1');
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

export default function Home({contents}) {
  const [photos, setPhoto] = useState([])
  const [curPage, setCurPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit10&_page=${curPage}`)
    .then(response => {
      setPhoto( [...photos, ...response.data])
      setCurPage( prevState => prevState + 1)
    })
    .finally(()=> setFetching(false));
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHendller)
      return function () {
        document.addEventListener('scroll', scrollHendller)
      };
  }, [])

  const scrollHendller = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true)
    }
  }

  return (
    <>
      <Head>
        <title>post main page |  NIKITA.com</title>
      </Head>

    <div className="cardBlock">
        {photos && photos.map(contents => 
          <CardProject key={contents.id} id={contents.id} title={contents.title} descr={contents.title} image={contents.url}/>
        )}
    </div>
    </>
  )
}
