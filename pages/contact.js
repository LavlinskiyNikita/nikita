import Head from 'next/head'

export default function Conatct() {
  return (
    <>
      <Head>
        <title> contact |  NIKITA.com</title>
      </Head>
      <h1 className="titleContact">contacts</h1>
      <div className="linksSEction">
        <section className="SectionLink">
          <h2 className="sectionTitle">follow me</h2>
          <fieldset className="FollowFieldset">
            <ul className="ulSectionLink">
              <li className="LiSectionLink"><a href="https://www.instagram.com/babigam_/" target="_blank" rel="noreferrer">instagram</a></li>
              <li className="LiSectionLink"><a href="https://vk.com/yesgoodyess" target="_blank" rel="noreferrer">vkantakt</a></li>
              <li className="LiSectionLink"><a href="https://t.me/Prostinikita" target="_blank" rel="noreferrer">telegram</a></li>
            </ul>
          </fieldset>
        </section>
        <section className="SectionLink">
          <h2 className="sectionTitle">contac</h2>
          <fieldset className="FollowFieldset">
            <ul className="ulSectionLink">
              <li className="LiSectionLink"><a href="mailto:nikitalav21lin@gmail.com">nikitalav</a></li>
              <li className="LiSectionLink"><a href="https://wa.me/79515604359">whatsapp</a></li>
            </ul>
          </fieldset>
        </section>
      </div>
      <form action="" className="contactForm">
        <h2 className="TitleForm">SEND ME A MESSAGE</h2>
        <input placeholder="Name" type="text" className="contactName inputForm" />
        <input placeholder="Email" type="email" name="email" className="contactEmail inputForm"/>
        <textarea placeholder="message" name="" id="" cols="30" rows="10" className="inputFormTextarea"></textarea>
        <input type="submit" value="send" className="btnSubmit"/>
      </form>
    </>
  )
}