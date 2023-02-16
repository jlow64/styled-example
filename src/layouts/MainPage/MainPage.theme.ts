import styled from "styled-components";
import { ThemeMode } from "../../typings/styling";

export const Container = styled.div<ThemeMode>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    vertical-align: 50%;
    align-items: center;
    background-color: ${props => props.isLightMode? '#bebebe' : '#2a2a2a'};
    height: 100vh;
    width: 100vw;
`