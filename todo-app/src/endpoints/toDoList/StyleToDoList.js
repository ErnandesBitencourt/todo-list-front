import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    height: 100%;
    border: solid 1px red;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    
    
`;

export const Div = styled.div`
    width: 100%;
    height: 50px;
    min-height: 50px;
    display: flex;
    border: solid 1px red;
    align-items: center;
    justify-content: space-between;
    color: ${ props=> props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryDarkGrayishBlue : props => props.theme.AllTheme. DarkTheme.DarkGrayishBlue};
    font-weight: ${props => props.theme.AllTheme.FontWeights700.FontWeights};
`;
