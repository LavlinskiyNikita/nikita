import Link from 'next/link'


const CardProject = (props) => {
  return (
    <>
      <article className="card">
        <img className="card__image" width={300} src={props.image} alt={props.title}/>
        <div className="card__text">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__descr">{props.descr}</p>
            <p className="card__link"><Link href={`/post/${props.id}`}><a>more details</a></Link></p>
        </div>
     </article>
    </>
  )
}

export default CardProject