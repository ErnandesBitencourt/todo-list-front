import styled from "styled-components";

export const Main = styled.main`

    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryLightGray : props=> props.theme.AllTheme.DarkTheme.VeryDarkBlue};
    background-image: url(${props => props.changeColor ? props.theme.AllTheme.ImgBackgroundLightThemeDesktopMobile. BgDesktopLight: props => props.theme.AllTheme.ImgBackgroundDarkThemeDesktopMobile.BgDesktopDark});
    background-repeat: no-repeat;
    background-size: contain; 
`;

export const Div = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100vh;
    max-height: 70vh;
    border:  solid 1px red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
export const Header = styled.header`
    width: 100%;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px black;
`;

export const H1 = styled.h1`
     text-transform: uppercase;
     text-align: center;
     font-weight: ${props => props.theme.AllTheme.FontWeights700.FontWeights};;
     color: ${props => props.theme.AllTheme.LightTheme.VeryLightGray};   
`;

export const MainCreateTask = styled.main`
    width: 100%;
    height: 3.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryLightGray:props.theme.AllTheme.DarkTheme.VeryDarkDesaturatedBlue};
    border-radius: 10px;
    border: none;

`;

export const MainTodoList = styled.main`
    width: 100%;
    height: 100%;
    max-height:470px;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${ props => props.changeColor ? props =>          props.theme.AllTheme.LightTheme.VeryLightGray:props.theme.AllTheme.DarkTheme.VeryDarkDesaturatedBlue};
  
`;

export const Footer = styled.footer`
    width: 100%;
    height: 100%;
    max-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px blue;
    background-color: ${ props => props.changeColor ? props =>  props.theme.AllTheme.LightTheme.VeryLightGray:props.theme.AllTheme.DarkTheme.VeryDarkDesaturatedBlue};

`;

export const Input1 = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 80px;
    [type=checkbox]:checked ::before {
        background-color: aquamarine;
        content: " ";
    }
`