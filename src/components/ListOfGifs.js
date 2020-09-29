import React, { useState,useEffect } from 'react'
import Gif from './Gif';
import getGifts from '../services/getGifs';

const ListOfGifd = ({ keyword }) => {
    
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifts({ keyword }).then(gifs => setGifs(gifs))
      }, [keyword])
    
    return gifs.map(({ id,title,url }) => 
        <Gif 
        key={id}
        title={title}
        url={url}
        id={id}
        />
    )
      

}

export default ListOfGifd