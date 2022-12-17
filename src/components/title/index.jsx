export default function Title(props) {
  return <h1>{props.title}</h1>
}

Title.defaultProps = {
  title: 'title not set',
}
