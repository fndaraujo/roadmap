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
      </ul>
      <Link href={'/about'}>about</Link>
      <Link href={'/aspnet'}>aspnet core</Link>
      <Link href={'/dotnet'}>dotnet core</Link>
      <Link href={'/reactjs'}>react js</Link>
    </div>
  )
}
