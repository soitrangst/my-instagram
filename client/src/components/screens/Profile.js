import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../redux/api'
import { userInterface } from "../../redux/constants/user-Interface";
import LHeader from "./UserProfile/LHeader-Profile"
import MHeader from "./UserProfile/MHeader-Profile"
import M from 'materialize-css'

const Profile = () => {
    const [myData, setMyData] = useState(userInterface);
    const userid = !JSON.parse(localStorage.getItem('user')) ? null : JSON.parse(localStorage.getItem('user'))._id

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
        !userid ? <div></div> :
            <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                <LHeader
                    name={myData.user.name}
                    userid={userid}
                    email={myData.user.email}
                    post={myData.post.length}
                    followerArr={myData.user.follower}
                    follower={myData.user.follower.length}
                    following={myData.user.following.length}
                />
                <MHeader
                    name={myData.user.name}
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

export default Profile;
