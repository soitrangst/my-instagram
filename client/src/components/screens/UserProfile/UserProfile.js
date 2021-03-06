import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getUserProfile } from '../../.././redux/api';
import { userInterface } from "../../.././redux/constants/user-Interface";
import { putFollow } from '../../.././redux/api';
import LHeader from "./LHeader-Profile";
import MHeader from "./MHeader-Profile"
import M from 'materialize-css'


const UserProfile = () => {
    const [myData, setMyData] = useState(userInterface);
    const [update, setUpdate] = useState(false)
    const { userid } = useParams()

    const getData = async () => {
        try {
            const result = await getUserProfile(userid)
            setMyData(result)
        } catch (error) {
            M.toast({ html: error, classes: 'red' })
        }
    }

    useEffect(() => {
        getData()
    }, [userid,update])

    const _follow = async (userid) => {
        try {
        const result = await putFollow(userid)
        setUpdate(!update)
        } catch (error) {
            M.toast({html:error,classes:"red"})
        }
    }
    return (
        !myData.user._id ? <div></div> :
            <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                <LHeader
                    name={myData.user.name}
                    _follow={_follow}
                    userid={userid}
                    email={myData.user.email}
                    post={myData.post.length}
                    follower={myData.user.follower.length}
                    followerArr={myData.user.follower}
                    following={myData.user.following.length}
                />
                <MHeader
                    name={myData.user.name}
                    _follow={_follow}
                    userid={userid}
                    email={myData.user.email}
                    post={myData.post.length}
                    followerArr={myData.user.follower}
                    follower={myData.user.follower.length}
                    following={myData.user.following.length}
                />

                <div className="gallery">
                    <section className="grid">
                        {myData.post.map((e) => {
                            let url = e.photo.url
                            let width = e.photo.width
                            let height = e.photo.height
                            return (
                                <div
                                    key={e._id}
                                    className={`item item-${Math.ceil(
                                        height / width,
                                    )}`}
                                >
                                    <img src={url} />
                                </div>
                            )
                        })}
                    </section>
                </div>
            </div>
    );
}

export default UserProfile;
