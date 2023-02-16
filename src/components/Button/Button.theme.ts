import styled from "styled-components";
import { ThemeMode } from "../../typings/styling";

export const StyledButton = styled.button<ThemeMode>`
    border-radius: 12%;
    border: 0px;
    background-color: ${props => props.isLightMode? '#151515' : '#d3d3d3'};
    color:  ${props => props.isLightMode? '#d3d3d3' : '#151515'};
    height: 3rem;
    width: 7rem;
    padding: 5px;
`