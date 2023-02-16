import styled from "styled-components";
import { ThemeMode } from "../../typings/styling";

export const StyledTitle = styled.h1<ThemeMode>`
    color: ${props => props.isLightMode? '#151515' : '#bebebe' };
`