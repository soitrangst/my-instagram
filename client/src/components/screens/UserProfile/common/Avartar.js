import React from 'react'

export default function Avartar(props) {
    let { photo, userid } = props
    return (
        <div className={`avartar-profile ${userid?'':'hover-avatar'}`}>
            <img
                className="avartar-img "
                src={photo ? photo :
                    "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/95313278_3012978868793752_4512109258958962688_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Vfm5cyj32GcAX-gkbVj&_nc_ht=scontent.fsgn5-5.fna&oh=ae54b5405b1b9e787628d287026e1685&oe=5F4B6C45"
                } alt="avatar"
            />
            {userid ? "":
            <div className="icon-avartar">
                <a
                    className=" modal-trigger"
                    data-target="modal1"
                >
                    <i className="material-icons small" >cloud_upload</i>
                </a>
            </div> 
            }
        </div>
    )
}
