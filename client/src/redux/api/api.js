const env = 'localhost:5000'

const api = {
    signup: `http://${env}/signup`,
    signin: `http://${env}/signin`,
    createPost:`http://${env}/createpost`,
    posts:`http://${env}/posts`,
    myposts:`http://${env}/mypost`,
}

export default api;