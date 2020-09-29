import React from 'react'
import './Gif.css'

const Gif = ({ title,url,id }) => {
    return <a href={`#${id}`} className="Gif">
              <h4>{title}</h4>
              <small>{id}</small>
              <img src={url} />
            </a> 
}

export default Gif