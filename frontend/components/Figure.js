import React from "react"

export default function Figure({ imageURL, caption }) {
    return (
      <figure>
          <img src={ imageURL } />
          <figcaption>Photo was take on { caption }</figcaption>
        </figure>
    )
  }