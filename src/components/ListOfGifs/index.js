import React from 'react'
import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({gifs}) {
  return <div className='ListOfGifs'>
    {
      gifs.map(({id, title, url , ...ObjNewDeprueva}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          objInesesario={ObjNewDeprueva}
        />
      )
    }
  </div>
}