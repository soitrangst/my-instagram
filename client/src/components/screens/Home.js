import React, { useState } from 'react'

export default function Home() {

    const [images, setImagaes] = useState([{ id: 1, like: true }, { id: 2, like: false }, { id: 3, like: false }, { id: 4, like: true }])

    const _like = (e) => {
        let index = images.indexOf(e)
        images[index].like = !images[index].like
        setImagaes([...images])
    }

    return (
        <div className="home">
            {images.map((e, index) => {
                return (
                    <div key={index} className="card home-card" onClick={() => _like(e)}>
                        <h5>lyly</h5>
                        <div className="card-image">
                            <img
                                src={`https://images.unsplash.com/photo-1596357876935-cc6d6919ad10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60`}
                                alt="image" />
                        </div>
                        <div className="card-content">
                            {e.like ? <i className="small red-text text-accent-4 material-icons">favorite</i> :
                                <i className="small material-icons">favorite_border</i>
                            }
                            <h6>title</h6>
                            <p>body</p>
                            <input type="text" placeholder="comment" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
