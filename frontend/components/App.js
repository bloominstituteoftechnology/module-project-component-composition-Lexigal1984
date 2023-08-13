import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Potd from './Potd'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
        .then(res => {
          console.log(res.data)
          setApod(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
    // fetchPhoto()
    setApod({
      "copyright" : "Paolo Palma",
      "date" : "2023-08-12",
      "explanation" : "It's fun to scribble on the canvas of the sky. You can use a creative photographic technique to cause the light of point-like stars to dance across a digital image by tapping lightly on the telescope while making an exposure. The result will be a squiggly line traced by the star (or two squiggles traced by binary stars) that can reveal the star's color. Colorful lines, dubbed Ghirigori, made from stars found in the northern sky constellations Bootes, Corona Borealis, Ophiucus, and Coma Berenices, are captured in this artistic mosaic. The 25 stars creating the varied and colorful squiggles are identified around the border. Of course, temperature determines the color of a star. While whitish stars tend to be close to the Sun's temperature, stars with bluer hues are hotter, and yellow and red colors are cooler than the Sun.  Weekend Watch: Perseid Meteor Shower",
      "hdurl" : "https://apod.nasa.gov/apod/image/2308/Ghirigori_delBooteCoronaBorealeOfiucoeChiomadiBerenice.jpg",
      "media_type" : "image",
      "service_version" : "v1",
      "title" : "Ghirigori - Star Scribbles",
      "url" : "https://apod.nasa.gov/apod/image/2308/Ghirigori_delBooteCoronaBorealeOfiucoeChiomadiBerenice1024.jpg"
    })
  }, [])

  if (!apod) return 'Fetching photo of the day...'
  return (
    <setion>
      <Potd 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
        copyright={apod.copyright} />
    </setion>
  )
}

export default App
