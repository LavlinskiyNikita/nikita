import Link from 'next/link'

function CardProject({ id, title, descr, image}) {
  return (
    <>
      <div className="card">
        <img className="card__image" width={300} src={image} alt={title}/>
        <div className="card__text">
            <h3 className="card__title">{title}</h3>
            <p className="card__descr">{descr}</p>
            <p className="card__link"><Link title={title} href={`/post/${id}`}><a>more details</a></Link></p>
        </div>
     </div>
    </>
  )
}

export default CardProject();