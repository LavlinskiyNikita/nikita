import React, {useState ,useEffect} from 'react'
import Head from 'next/head'
import CardProject from '../component/CardProject'

export default function Home() {
  const [Contact, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setContent(data)
    }
    fetchData()
  }, []);

  return (
    <>
    <div className="cardBlock">
        {Contact && Contact.map(({ id, title, url }) => (
          <CardProject key={id} title={title} descr={title} image={url}/>
        ))}
    </div>
    </>
  )
}
