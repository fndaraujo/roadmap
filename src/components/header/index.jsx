import Link from 'next/link'
import Title from 'src/components/title'
import appConfig from 'roadmap-config'
import { StyledHeader } from 'src/components/header/style'

export default function Header() {
  const productName = appConfig.app.product
  return (
    <StyledHeader>
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
        <li>
          <Link href={'/reactjs'}>react js</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}
