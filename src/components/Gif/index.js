import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif ({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}

export default React.memo(Gif,(prevProps,nextProps) => {
  return prevProps.id == nextProps.id // esto es para que vea si enverdad esto esta cambiando y no renderise 
})