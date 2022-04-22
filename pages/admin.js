import Head from 'next/head'
import { useRouter } from 'next/router'


export default function Admin() { 

  const router = useRouter()

  const login = 'jonu';
  const pas = 123456;

  const loginFun = (e) => {
    e.value
  }

  const pasFun = (e) => {
    e.value
  }

  if (login == loginFun && pas === pasFun) {

    return hendleForm(e)
  }  

  const hendleForm = (e) => {
    e.preventDefault()
    router.push('/adminPage/adminPortfolio')
  }
  
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

          <form method="POST" onSubmit={hendleForm} className="FormLogIn">
            <input onChange={loginFun} placeholder="email" className="inputLogIn InputEmail" type="text" name="email" required/>
            <input onChange={pasFun} placeholder="password" className="inputLogIn InputPassword" type="password" name="password" required/>
            <button type="submit" className="BtnSubmitLogIn">log in</button>
          </form>
        </div>
    </>
  )
}