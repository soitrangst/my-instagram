import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import M from "materialize-css"
import { getUserProfile } from '../../.././redux/api';
import { userInterface } from "../../.././redux/constants/user-Interface";
import LHeader from "./LHeader-Profile";
import MHeader from "./MHeader-Profile"


const UserProfile = () => {
    const [myData, setMyData] = useState(userInterface);
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
    }, [userid])
    return (
        !myData.user._id ? <div></div> :
            <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                <LHeader
                userid={userid}
                myData={myData}
                />
                <MHeader
                userid={userid}
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

export default UserProfile;
