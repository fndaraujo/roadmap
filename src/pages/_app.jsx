import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Head>
        <meta charSet={'utf-8'} />
        <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0'}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
