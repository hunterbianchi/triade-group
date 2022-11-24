import styled from "styled-components";
import { HomeTypes } from "../../pages";

export const Wrapper = styled.div<HomeTypes>`
    width: 100%;
    height: 100%;
    background: ${({isChromium})=>isChromium?`#fff1`:`#000`};
    backdrop-filter: blur(6px);
`