export default function CardProject({ title, descr, image}) {
  return (
    <>
      <div className="card">
        <img className="card__image" width={300} src={image} alt={title}/>
        <div className="card__text">
            <h3 className="card__title">{title}</h3>
            <p className="card__descr">{title}</p>
            <p className="card__link"><a href="">more details</a></p>
        </div>
     </div>
    </>
  )
}