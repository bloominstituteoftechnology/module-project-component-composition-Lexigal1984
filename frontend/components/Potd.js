import React from "react";
import Figure from "./Figure";


export default function Potd({ title, text, imageURL, date }) {
    return (
      <div className='potd'>
        <h2>{ title }</h2>
        <p>{ text }</p>
        <Figure
          imageURL={ imageURL }
          caption={ date }
        />
      </div>
    )
  }