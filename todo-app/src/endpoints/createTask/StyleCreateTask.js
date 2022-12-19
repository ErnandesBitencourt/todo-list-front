import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    background: none;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }

`;

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: none;
    border-radius: 10px;
    border: none;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 80%;
    height: 100%;
    background: none;
    border: none;
    border-radius: 10px;
    font-size: 22px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: ${props => props.theme.AllTheme.FontWeights700.FontWeights};
    margin-left: 4px;
    color: ${ props=> props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryDarkGrayishBlue : props => props.theme.AllTheme. DarkTheme.DarkGrayishBlue};
    :focus{
        background: none;
        outline: 0;
        border: none;
        font-size: 22px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: ${props => props.theme.AllTheme.FontWeights700.FontWeights};
        color: ${ props=> props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryDarkGrayishBlue : props => props.theme.AllTheme. DarkTheme.DarkGrayishBlue};

    };

`;

export const Button = styled.button`
    width: 100%;
    max-width: 18%;
    height: 90%;
    border-radius: 10px;
    border: none;
    text-transform: uppercase;
    font-weight: ${props => props.theme.AllTheme.FontWeights700.FontWeights};
    background-color: ${props => props.theme.AllTheme.Primary.BrightBlue};
    color: ${ props=> props.changeColor ? props => props.theme.AllTheme.LightTheme.VeryDarkGrayishBlue : props => props.theme.AllTheme. DarkTheme.VeryDarkGrayishBlue2};
`;