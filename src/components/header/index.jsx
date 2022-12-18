import Link from 'next/link'
import Title from 'src/components/title'
import appConfig from 'roadmap-config'

export default function Header() {
  const productName = appConfig.app.product
  return (
    <div>
      <Title title={productName} />
      <ul>
        <li>
          <Link href={'/'}>home</Link>
        </li>
        <li>
          <Link href={'/about'}>about</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={'/aspnet'}>aspnet core</Link>
        </li>
        <li>
          <Link href={'/dotnet'}>dotnet core</Link>
        </li>
      </ul>
      <Link href={'/reactjs'}>react js</Link>
    </div>
  )
}
