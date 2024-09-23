import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import  "./main.css"

export  default function EmblaCarousel({pokemonList}) {

  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {pokemonList && pokemonList?.map(
          (item)=><div  key={item} className="embla__slide"><img className="embla_img" src={item} alt={item} /></div>
        )}
      </div>
    </div>
  )
}
