import { ThemeMode } from "../../typings/styling"
import { StyledTitle } from "./Title.theme"

const Title = ({ isLightMode }: ThemeMode) => {
  return (
    <StyledTitle isLightMode={isLightMode}>Styled-components example</StyledTitle>
  )
}

export default Title