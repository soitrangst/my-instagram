import React from 'react'


export default function Tab(props) {
    
    const { userid, _follow } = props
    let ownerID = !JSON.parse(localStorage.getItem('user')) ? null : JSON.parse(localStorage.getItem('user'))._id

    function _followAction(userid) {
        _follow(userid)
    }

    const profile = () => {
        if (ownerID === userid || !userid) {
            return <i className="material-icons small">settings</i>
        } else {
            return (
                <div className='rowC' style={{ width: 'max-content' }}>
                    <i className="material-icons small  green-text text-accent-3">beenhere</i>
                    <a className="waves-effect  cyan lighten-5 btn ">chat</a>
                    <a className="waves-effect  cyan lighten-5 btn " onClick={() => { _followAction(userid) }}>unfollow</a>
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            {profile()}
        </React.Fragment>
    )
}


//<a className="waves-effect green accent-3 btn" onClick={()=>_follow(userid)}>follow</a>
