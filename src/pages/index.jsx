import Head from 'next/head'
import appConfig from 'roadmap-config'
import styled from 'styled-components'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;

  h1 {
    text-transform: uppercase;
  }
  p {
    margin: 1rem 4rem;
  }

  .in-development-notice {
    padding: 0.1rem 1rem;
    background-color: grey;
    color: ghostwhite;
    max-width: fit-content;
    border-radius: 0.5rem;
  }
`
export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.app.product}</title>
      </Head>
      <StyledHome>
        <h1>roadmap</h1>
        <p>
          An interactive web site providing a roadmap for web development with
          focus on <strong>react</strong> and <strong>dotnet core</strong>{' '}
          technology and ecosystems.
        </p>
        <p className="in-development-notice">
          <strong>in development</strong>
        </p>
      </StyledHome>
    </>
  )
}
