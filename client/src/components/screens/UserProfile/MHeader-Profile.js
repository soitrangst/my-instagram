import React from 'react'
import Tab from "./tab"

export default function MHeaderProfile(props) {
    const { name, _follow, userid, email, post, follower, following,followerArr } = props
    return (
        <div className="profile-title-M">

            <div className='rowC'>
                <img
                    className="avartar-img"
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/95313278_3012978868793752_4512109258958962688_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Vfm5cyj32GcAX-gkbVj&_nc_ht=scontent.fsgn5-5.fna&oh=ae54b5405b1b9e787628d287026e1685&oe=5F4B6C45"
                    alt="avatar"
                />
                <div className='rowD'>
                    <h4>{name}</h4>
                    <Tab _follow={_follow} userid={userid} followerArr={followerArr} />
                </div>
            </div>
            <h4 style={{textAlign:'center'}}>{email}</h4>
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
    )
}
