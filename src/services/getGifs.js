const apiKey = 'BQM0oJgknDwOsxcdRgWMYLqBWQUvLsM4'


export default function getGifts ({keyword='rick'}= {}) {

const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const { data = [] } = response
        if(Array.isArray(data)) {
            const gifs = data.map(image => {
                const { images,title,id } = image
                const { url } = images.downsized_medium
                return { url,title,id }
            })
            return gifs
        }
        
    })

}