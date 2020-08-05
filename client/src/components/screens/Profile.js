import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myPosts,toggleLike } from '../../redux/actions'

const Profile = () => {
    const [myData, setMyData] = useState([]);
    const profile = useSelector(state => state.myPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(myPosts())
        const data = profile.response
        if (!profile.error) {
            setMyData(data)
        }
    }, [profile.loading])
    
    const user = JSON.parse(localStorage.getItem('user'))
    return (
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
                    <h4>{user ? user.name : ""}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>50 following</h6>
                    </div>
                </div>

            </div>

            <div className="gallery">
                <section className="grid">
                    {myData.map((e) => {
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
