import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang={'en-US'}>
      <Head>
        <meta name={'creator'} content={'Fernando Araujo dos Santos'} />
        <meta name={'author'} content={'Fernando Araujo dos Santos'} />
        <meta
          name={'description'}
          content={
            'An interactive web site providing a roadmap for web development with focus on react and dotnet core technology and ecosystems.'
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
