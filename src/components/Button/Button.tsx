import { StyledButton } from './Button.theme'

const Button = ({ click, isLightMode }: { click: () => void, isLightMode: boolean}) => {
  return (
    <StyledButton onClick={click} isLightMode={isLightMode} >Click to change theme</StyledButton>
  )
}

export default Button