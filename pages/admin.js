import Head from 'next/head'

export default function Admin() {
  return (
    <>
      <Head>
        <title>
          admin |  NIKITA.com
        </title>
      </Head>
      <div className="blogForm">
          <div className="FormImageBlock">
            <img className="FormImage" src="/admin__icon.svg" alt="img-login" />
          </div>
          <h1 className="TitleLogin">log in</h1>
          <form action="" method="post" className="FormLogIn">
            <input placeholder="email" className="inputLogIn InputEmail" type="email" name="" id="" />
            <input placeholder="password" className="inputLogIn InputPassword" type="password" name="" id=""/>
            <button type="submit" className="BtnSubmitLogIn">log in</button>
          </form>
        </div>
    </>
  )
}