import React from "react"
import { styled } from "styled-components"

const StyledFig = styled.figure`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%  
`

export default function Figure({ imageURL, caption, author }) {
    return (
      <StyledFig>
          <img src={ imageURL } />
          <figcaption>The Photo of the Day was brought to us by { author } on { caption }</figcaption>
        </StyledFig>
    )
  }