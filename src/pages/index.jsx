import Head from 'next/head'
import Layout from 'src/components/layout'
import appConfig from 'roadmap-config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <div>
        <h1>roadmap</h1>
        <p>
          An interactive web site providing a roadmap for web development with
          focus on <strong>react</strong> and <strong>dotnet core</strong>{' '}
          technology and ecosystems.
        </p>
        <p className="in-development-notice">
          <strong>in development</strong>
        </p>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
