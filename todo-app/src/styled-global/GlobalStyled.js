import {createGlobalStyle} from "styled-components";
import bgDesktopLight from "../images/bgDesktopLight.jpg"
import bgMobileLight from "../images/bgMobileLight.jpg"
import bgDesktopDark from "../images/bgDesktopDark.jpg"
import bgMobileDark from "../images/bgMobileDark.jpg"
export const GlobalStyled = createGlobalStyle`
    
    body{
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        
    }

`;

export const AllTheme = {
    Primary : { 
        BrightBlue:'hsl(220, 98%, 61%)',
        CheckBackground:'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
    },

    FontWeights700 : {
        FontWeights:700
    },
    LightTheme : {
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
    },
    ImgBackgroundLightThemeDesktopMobile:{
        BgDesktopLight: `${bgDesktopLight}`,
        BgMobileLight :`${bgMobileLight}`
    },
    //------------------------------------//
    DarkTheme : {
        VeryDarkBlue:'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue:'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        DarkGrayishBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)'
    },
    DarkThemeHove : { 
        LightGrayishBlue:'hsl(236, 33%, 92%)'
    },

    ImgBackgroundDarkThemeDesktopMobile : { 
        BgDesktopDark : `${bgDesktopDark}`,
        BgMobileDark  : `${bgMobileDark}`
        
    }

};


