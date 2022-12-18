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
    </div>
  )
}
