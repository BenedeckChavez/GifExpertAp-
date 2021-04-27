export const  getGif = async (categorie) => {
       
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorie)}&limit=10&api_key=5Vk2AyiDQBz9QOshtiC3jXO8iiTNX6ne` ;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        const json = {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url};

        return json;
    })

    return gifs;
};

