export const userInterface = {
    user: {
        _id: "",
        email: "",
        name: "",
        follower:[],
        following:[]
    },
    post: [
        {
            like: [],
            _id: "",
            title: "",
            body: "",
            photo: {
                url: "",
                photoId: "",
                width: "",
                height: "720",
            },
            postedBy: {
                _id: "",
                name: ""
            },
            comment: [
                {
                    _id: "",
                    text: "",
                    postedBy: ""
                }
            ]
        }
    ]
}
