import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Guide() {
  const router = useRouter()
  const { guide } = router.query
  return (
    <div>
      <Head>
        <title>Roadmap | {guide}</title>
      </Head>
      <p>Guide: {guide}</p>
    </div>
  )
}
