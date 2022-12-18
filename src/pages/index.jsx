import Head from 'next/head'
import Subtitle from 'src/components/subtitle'
import appConfig from 'roadmap-config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <Subtitle subtitle={'react.js'} />
      <p>
        React is a free and open-source javascript library for building user
        interfaces based on UI components, maintained by Meta, formely named as
        Facebook, and a large community of individual developers and companies.
      </p>
      <p>
        The react library can be used as a base in the development of single
        page applications, mobile and server-rendered applications with the aid
        of frameworks like next.
      </p>
      <p>
        React is only concerned with the management of the application states
        and rendering these states to the DOM, this imply that creating React
        applications usually requires the use of additional libraries for
        routing, as well as certain client side funtionality.
      </p>
      <p>Source Wikipedia, 2022.</p>
    </>
  )
}
