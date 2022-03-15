import AsideBar from "./Asidebar";

export default function Layout({ children }) {
  return (
    <>
      <AsideBar/>
      <div className="main">
        <div className="main__content">
          <div className="main__container">
            {children}
          </div>
        </div>
        
      </div>
    </>
  )
}