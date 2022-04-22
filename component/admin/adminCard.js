export default function adminCard() {

  return(
    <>
      <article className="admin-card">
        <div className="admin-card__diraction">
          <div className="admin-card__image">
            <img src="../../image4.png" alt="image" />
          </div>
          <div className="admin-card__text">
            <p className="admin-card__title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, sequi soluta!</p>
            <p className="admin-card__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ad quo facere itaque eveniet incidunt doloribus natus. Rem, id ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat inventore magnam minus voluptas tenetur minima nemo? Aut rem nobis, assumenda velit ad quod suscipit atque explicabo, soluta, laboriosam non!</p>
          </div>
        </div>
        <div className="admin-card__manage">
          <button className="admin-card__edit admin-card__btn">
            <img width={33} height={33} src="../../icon/edit.svg" alt="image" />
          </button>
          <button className="admin-card__del admin-card__btn">
            <img width={33} height={33} src="../../icon/del.svg" alt="image" />
          </button>
        </div>
      </article>
    </>
  )
}