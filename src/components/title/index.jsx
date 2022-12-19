import { StyledTitle } from 'src/components/title/style'

export default function Title(props) {
  return <StyledTitle>{props.title}</StyledTitle>
}

Title.defaultProps = {
  title: 'title not set',
}
