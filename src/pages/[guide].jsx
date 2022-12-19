import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Subtitle from 'src/components/subtitle'
import { StyledGuide } from 'src/styles/guide-style'

export default function Guide() {
  const router = useRouter()
  const { guide } = router.query
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/${guide}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [guide])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <StyledGuide>
      <Head>
        <title>Roadmap | {guide}</title>
      </Head>
      <Subtitle subtitle={data.guide} />
      {data.contents?.map((content) => (
        <p key={content.title}>{content.title}</p>
      ))}
    </StyledGuide>
  )
}
