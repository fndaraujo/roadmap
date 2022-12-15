import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
