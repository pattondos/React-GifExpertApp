import React from 'react'

const GifGridItem = ({ title, url }) => {

    return (
        <div className="cardGif animate__animated animate__bounce">
            <img
                src={url}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem;
