import Link from 'next/link'
import appConfig from 'roadmap-config'

export default function Footer() {
  return (
    <div>
      <section>
        <p>
          MIT license &copy; {appConfig.app.year}, {appConfig.app.author}.
        </p>
      </section>
      <section>
        <ul>
          <li>
            <a href={appConfig.app.github}>source code</a>
          </li>
          <li>version {appConfig.app.version}</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link href={'/'}>home</Link>
          </li>
          <li>
            <Link href={'/aspnet'}>aspnet core</Link>
          </li>
          <li>
            <Link href={'/dotnet'}>dotnet core</Link>
          </li>
          <li>
            <Link href={'/reactjs'}>react js</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
