import { createGlobalStyle } from 'styled-components';
import NotoSansKR from '../../assets/fonts/NotoSansKR-Regular.woff';
import SDMiSaeng from '../../assets/fonts/SDMiSaeng.woff';
import Jalnan2 from '../../assets/fonts/Jalnan2.woff';
import AutoMobileContest from '../../assets/fonts/Automobile-Contest.woff';
import Rembank from '../../assets/fonts/Rembank.woff';

export const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"), url(${NotoSansKR}) format("woff");
    }
    
    @font-face {
        font-family: "MiSaeng";
        src: local("MiSaeng"), url(${SDMiSaeng}) format("woff");
    }
    
    @font-face {
        font-family: "Jalnan2";
        src: local("Jalnan2"), url(${Jalnan2}) format("woff");
    }
    
    @font-face {
        font-family: "AutoMobileContest";
        src: local("AutoMobileContest"), url(${AutoMobileContest}) format("woff");
    }
    
    @font-face {
        font-family: "Rembank";
        src: local("Rembank"), url(${Rembank}) format("woff");
    }
`;
