import { useState } from "react"
import AdminCard from "../../component/admin/adminCard"
import ATopPanel from "../../component/admin/aTopPanel"
import Modal from "../../component/modal"

export default function bBlog() {
  const [modalActive, setModalAcrtive] = useState(false)

  return (
    <>
    <ATopPanel></ATopPanel>
    <div className="PortfolioPage">
        <button className="add-button" onClick={() => setModalAcrtive(true)}>создать проект</button>
        <div className="PortfolioPage__content">
          <AdminCard></AdminCard>
        </div>
      </div>
      <Modal activeM={modalActive} sActive={setModalAcrtive}>
          <div className="modal__input">
            <div className="modal__input-file">
              <label className="modal__label">
                <input type="file" className="modal__input-text"/>
                <span>выбрать фото</span>
              </label>
            </div>
            <input type="text" className="modal__input-text" placeholder="title" required/>
            <input type="text" className="modal__input-text" placeholder="descroption" required/>
          </div>
      </Modal>
    </>
  )
}
