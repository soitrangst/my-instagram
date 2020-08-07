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
            
        } catch (error) {
            M.toast({ html: error, classes: 'red' })
        }
    }
    useEffect(() => {
        getData()
    }, [userid])

    return (
        ( !myData.user._id) ? <div></div> :
            <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                <LHeader
                myData={myData}
                />
                <MHeader
                myData={myData}
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
