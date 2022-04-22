export default function modal({activeM, sActive, children}) {
  return (
    <div className={activeM ? "modal active" : "modal"} onClick={() => sActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <form action="">
          {children}
          <div className="modal__btn">
            <button className="modal__button modal__button--cancel" onClick={() => sActive(false)}>отмена</button>
            <button className="modal__button modal__button--add" type="submit">создавть</button>
          </div>
        </form>
      </div>
    </div> 
  )
}