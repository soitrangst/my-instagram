import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tab from "./Tab";
import { putFollower } from "../../../redux/actions";
import { putAvartar } from "../../../redux/api"
import M from "materialize-css";
import Avatar from "./common/Avartar"
import ModalImage from "./common/Modal-Image"

export default function LHeaderProfile(props) {
    const { userid, myData } = props
    let photoUrl = myData.user.photo ? myData.user.photo.url : null
    const [photo, setPhoto] = useState(photoUrl)
    const [data, setData] = useState({
        name: myData.user.name,
        email: myData.user.email,
        post: myData.post.length,
        follower: myData.user.follower.length,
        followerArr: myData.user.follower,
        following: myData.user.following.length
    })
    const headerState = useSelector(state => state.myFollower)
    const dispatch = useDispatch()

    const updateAvartar = async (file) => {
        if (userid) {
            const data = new FormData()
            data.append('photo', file)
            try {
                let result = await putAvartar(data)
                const { messages, response } = result
                setPhoto(response.photo.url)
                M.toast({ html: messages, classes: 'light-green darken-3' })
            } catch (error) {
                M.toast({ html: error, classes: 'red' })
            }
        }
    }

    useEffect(() => {
        let dataResponse = headerState.response.result
        if (userid) {
            if (!headerState.loading) {
                if (headerState.error) {
                    M.toast({ html: headerState.error, classes: "red" })
                } else if (dataResponse) {
                    let newFollower = dataResponse.follower
                    let newFollowing = dataResponse.following
                    setData({ ...data, follower: newFollower.length, following: newFollowing.length, followerArr: newFollower })
                }
            }
        }
    }, [headerState.loading])

    let { name, email, post, follower, followerArr, following } = data

    const _follow = (passFollower) => {
        dispatch(putFollower(passFollower))
    }

    return (
        <div className="profile-title-L">
            <ModalImage updateAvartar={updateAvartar} />
            <Avatar photo={photo} userid={userid} />
            <div style={{ width: '50%' }}>
                <div className='rowC'>
                    <h4>{name}</h4>
                    <Tab _follow={_follow} userid={userid} followerArr={followerArr} />
                </div>
                <h4>{email}</h4>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h6>{post > 1 ? `${post} posts` : `${post} post`}</h6>
                    <h6>
                        {follower > 1 ?
                            `${follower} followers` :
                            `${follower} follower`}
                    </h6>
                    <h6>
                        {following > 1 ?
                            `${following} followings` :
                            `${following} following`}
                    </h6>
                </div>
            </div>

        </div>
    )
}
