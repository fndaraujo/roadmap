import Head from 'next/head'
import Layout from 'src/components/layout'
import appConfig from 'roadmap-config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <div>index</div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
