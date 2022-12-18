import appConfig from 'roadmap-config'

export default function Footer() {
  return (
    <div>
      <section>
        <p>
          MIT license &copy; {appConfig.app.year}, {appConfig.app.author}.
        </p>
      </section>
    </div>
  )
}
