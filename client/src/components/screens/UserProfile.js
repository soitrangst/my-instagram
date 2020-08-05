import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getUserProfile } from '../../redux/api'
import { userInterface } from "../../redux/constants/user-Interface"
import M from 'materialize-css'
const UserProfile = () => {
    const [myData, setMyData] = useState(userInterface);
    const { userid } = useParams()

    const getData = async () => {
        try {
            const result = await getUserProfile(userid)
            setMyData(result)
            console.log(result);
        } catch (error) {
            M.toast({ html: error, classes: 'red' })
        }
    }
    useEffect(() => {
        getData()
    }, [userid])

    return (
        !myData.user._id ? <div></div> :
            <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                <div className="profile-title" style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "18px 0px",
                    borderBottom: "1px solid grey"
                }}>
                    <img
                        style={{ width: "160px", height: "auto", borderRadius: '50%' }}
                        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/95313278_3012978868793752_4512109258958962688_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Vfm5cyj32GcAX-gkbVj&_nc_ht=scontent.fsgn5-5.fna&oh=ae54b5405b1b9e787628d287026e1685&oe=5F4B6C45"
                        alt="avatar"
                    />

                    <div style={{ width: '50%' }}>
                        <h4>{myData.user.name ? myData.user.name : ""}</h4>
                        <h4>{myData.user.email ? myData.user.email : ''}</h4>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h6>{myData.post > 1 ? `${myData.post.length} posts` : `${myData.post.length} post`}</h6>
                            <h6>
                            {myData.user.follower > 1 ? 
                            `${myData.user.follower.length} followers`:
                            `${myData.user.follower.length} follower`}
                            </h6>
                            <h6>
                            {myData.user.following > 1 ? 
                            `${myData.user.following.length} followings`:
                            `${myData.user.following.length} following`}
                            </h6>
                        </div>
                    </div>

                </div>

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
