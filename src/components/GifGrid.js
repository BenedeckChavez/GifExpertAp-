import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {


    const {data,loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <h3>Cargando...</h3> }

            <div className="card-grid">
                { data.map(img => (<GifGridItem key={img.id} {...img} />) ) }
            </div>
        </>
    )
}

export default GifGrid
