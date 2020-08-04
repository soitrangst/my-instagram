import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { social } from "../../redux/actions"
export default function Home() {
    const state = useSelector(state => state.social)
    const dispatch = useDispatch()
    const [images, setImages] = useState([{ _id: "", photo: "", postedBy: { name: "" }, title: "", body: "" }])

    useEffect(() => {
        dispatch(social())
        if (!state.error) {
            console.log(state.response);
            setImages(state.response)
        }

    }, [state.loading])

    const _like = (e) => {
        let index = images.indexOf(e)
        images[index].like = !images[index].like
        setImages([...images])
    }

    return (
        <div className="home">
            {images.map((e) => {
                return (
                    <div key={e._id} className="card home-card">
                        <h5>{e.postedBy.name}</h5>
                        <div className="card-image" onClick={() => _like(e)}>
                            <img
                                src={e.photo}
                                alt="user" />
                        </div>
                        <div className="card-content">
                            {/* {e.like ? <i className="small red-text text-accent-4 material-icons" onClick={() => _like(e)}>favorite</i> :
                                <i className="small material-icons" onClick={() => _like(e)}>favorite_border</i>
                            } */}
                            <i className="small material-icons" onClick={() => _like(e)}>favorite_border</i>
                            <h6>{e.title}</h6>
                            <p>{e.body}</p>
                            <input type="text" placeholder="comment" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
