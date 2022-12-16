import Header from 'src/components/header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
