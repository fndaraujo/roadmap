import Title from 'src/components/title'
import appConfig from 'roadmap-config'

export default function Header() {
  const productName = appConfig.app.product
  return (
    <div>
      <Title title={productName} />
    </div>
  )
}
