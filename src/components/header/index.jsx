import Title from 'src/components/title'
import appConfig from 'roadmap-config'
import Link from 'next/link'

export default function Header() {
  const productName = appConfig.app.product
  return (
    <div>
      <Title title={productName} />
      <Link href={'/aspnet'}>aspnet core</Link>
      <Link href={'/dotnet'}>dotnet core</Link>
      <Link href={'/reactjs'}>react js</Link>
    </div>
  )
}
