import styled, { createGlobalStyle } from 'styled-components'
import { AppTypes } from '../pages/_app'

export const Float = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

export const IconWrapper = styled.div<AppTypes>`
  width: 300px;
  height: 300px;
  border-radius: 60px;
  overflow: hidden;
  transition: 1s ease-in-out;

  animation-duration: 5s;
  animation-name: appeare;
  animation-iteration-count: 1;
  animation-direction: alternate;

  @keyframes appeare {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

`

export const GlobalStyles = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: var(--dark-background);
    overflow-x: hidden;
  }

  :root{
    --dark-background: #000;
    --light-background: #fff;
    --button-background: linear-gradient( #88b 5%, #228 25%, #228 75%, #004 100% );
    --button-hover-background: radial-gradient( #88f 20%,  #44f 100%);
    --border: 1px solid #fff8;
    --action-background: #00f;
    --color: #fff;
    --test-border: 1px solid #fff8;
    --test-background: #fff4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main{
    overflow: hidden;
  }

`