import React from 'react';

const Profile = () => {
    let arr = [1, 2, 3, 45, 6, 6, 7]
    return (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div className="profile-title" style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>


                <img
                    style={{ width: "160px", height: "auto", borderRadius: '80px' }}
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/95313278_3012978868793752_4512109258958962688_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Vfm5cyj32GcAX-gkbVj&_nc_ht=scontent.fsgn5-5.fna&oh=ae54b5405b1b9e787628d287026e1685&oe=5F4B6C45"
                    alt="avatar"
                />

                <div style={{ width: '50%' }}>
                    <h4>William Pham</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5>40 posts</h5>
                        <h5>40 followers</h5>
                        <h5>50 following</h5>
                    </div>
                </div>

            </div>

            <div className="gallery">
                {arr.map((e, index) => {
                    return (
                        <img key={index}
                            className="item"
                            src={`https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/95313278_3012978868793752_4512109258958962688_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Vfm5cyj32GcAX-gkbVj&_nc_ht=scontent.fsgn5-5.fna&oh=ae54b5405b1b9e787628d287026e1685&oe=5F4B6C45`} alt="avatar"
                        />
                    )
                })}


            </div>
        </div>
    );
}

export default Profile;
