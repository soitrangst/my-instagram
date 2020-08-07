const env = 'localhost:5000'

const api = {
    signup: `http://${env}/signup`,
    signin: `http://${env}/signin`,
    createPost:`http://${env}/createpost`,
    posts:`http://${env}/posts`,
    myposts:`http://${env}/mypost`,
    like: `http://${env}/like`,
    unlike:`http://${env}/unlike`,
    comment:`http://${env}/comment`,
    delete: `http://${env}/deletepost/`,
    userProfile:`http://${env}/user/`,
    follow:`http://${env}/follow`,
    unfollow:`http://${env}/unfollow`,
    myfollowingPosts:`http://${env}/subposts`,
    updateAvartar: `http://${env}/updateavartar`,
}

export default api;