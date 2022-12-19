import Head from 'next/head'
import Subtitle from 'src/components/subtitle'
import appConfig from 'roadmap-config'
import { StyledAbout } from 'src/styles/about-style'

export default function About() {
  return (
    <StyledAbout>
      <Head>
        <title>{appConfig.app.product} | About</title>
      </Head>
      <section>
        <Subtitle subtitle={'about'} />
        <p>
          Roadmap is a website providing a tentative guide for web development
          with focus on the React and .NET technology and ecosystems.
        </p>
      </section>
    </StyledAbout>
  )
}
