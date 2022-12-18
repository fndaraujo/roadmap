export default function Subtitle(props) {
  return <h2>{props.subtitle}</h2>
}

Subtitle.defaultProps = {
  subtitle: 'subtitle not set',
}
