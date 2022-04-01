import Head from 'next/head'

export default function Error() {
  return (
    <>
    <Head>
      <title>sorry but this page does not exist</title>
    </Head>
      <div className="error">
        <h1 className="error__text">
          404
        </h1>
      </div>
    </>
  )
}