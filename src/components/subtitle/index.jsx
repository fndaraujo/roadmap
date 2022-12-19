import { StyledSubtitle } from 'src/components/subtitle/style'

export default function Subtitle(props) {
  return <StyledSubtitle>{props.subtitle}</StyledSubtitle>
}

Subtitle.defaultProps = {
  subtitle: 'subtitle not set',
}
