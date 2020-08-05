import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getSocial } from "../../redux/actions"
import { like, commentPut } from "../../redux/api"
import M from "materialize-css"

export default function Home() {
    const [images, setImages] = useState([
        {
            _id: "",
            photo: "",
            like: [],
            comment: [{
                _id: '', text: "",
                postedBy: { name: "", _id: '' }
            }],
            postedBy: { name: "" },
            title: "",
            body: ""
        }
    ])
    const [text, setText] = useState('')
    const { social } = useSelector(state => state)
    const dispatch = useDispatch()
    let userID = !JSON.parse(localStorage.getItem('user')) ? null : JSON.parse(localStorage.getItem('user'))._id

    useEffect(() => {
        dispatch(getSocial())
        if (!social.error) {
            setImages(social.response)
        }

    }, [social.loading])

    const responseReact = async (req) => {
        try {
            const data = await like(req)
            let index = images.findIndex(e => e._id === data._id)
            images[index].like = data.like
            setImages([...images])
        } catch (error) {
            M.toast({ html: error, classes: 'red' })
        }
    }

    const react = (id) => {
        images.map(image => {
            if (image._id === id) {
                let isLike = image.like.indexOf(userID)
                if (isLike === -1) {
                    responseReact({ id, dislike: false })
                } else {
                    responseReact({ id, dislike: true })
                }
            }
        })
    }

    const _post = id => async event => {
        event.preventDefault()
        try {
            if (text) {
                const data = await commentPut(id, text)
                let index = images.findIndex(e => e._id === id)
                console.log(data);
                images[index].comment=[...data.comment]
                setImages([...images])
            }
        } catch (error) {
            M.toast({ html: error, classes: 'red' })
        }
        setText('')
    }

    return (
        <div className="home">
            {images.map((e) => {
                let url = e.photo.url
                let id = e._id
                let like = e.like.length
                let comments = e.comment
                return (
                    <div key={id} className="card home-card">
                        <h5>{e.postedBy.name}</h5>
                        <div className="card-image" onClick={() => react(id)}>
                            <img
                                src={url}
                                alt="user" />
                        </div>
                        {!userID ? '' :
                            <div className="card-content">
                                {e.like[0] ? <i className="small red-text text-accent-4 material-icons" onClick={() => react(id)}>favorite</i> :
                                    <i className="small material-icons" onClick={() => react(id)}>favorite_border</i>
                                }
                                <h5 >{like > 1 ? `${like} likes` : `${like} like`}</h5>
                                <h5>{e.title}</h5>
                                <p style={{ fontWeight: '500' }}>{e.body}</p>
                                {
                                    comments.map((e) => {
                                        return (
                                            <h6 key={e._id}><span style={{ fontWeight: '300' }}>{e.postedBy.name}: </span>{e.text}</h6>
                                        )
                                    })
                                }
                                <form action="#" onSubmit={_post(id)}>

                                    <div className="row">
                                        <div className="input-field col s12 input-button">
                                            <input
                                                type="text"
                                                minLength="1"
                                                maxLength='200'
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="comment" />
                                            <a className="btn-flat" onClick={_post(id)}>Post</a>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}
