import Image from 'next/image'


const postBlog = ({ title, descr, photo }) =>{
  return (
    <>
      <div className="post">
        <div className="img__post">
          
          <img className="img" src={`${photo}`} alt={`${title}`} />
        </div>
              

        <h2 className="title__post">{`${title}`}</h2>
        <p className="descr__descr">{`${descr}`}</p>
    </div>
    </>
  )
}

export default postBlog