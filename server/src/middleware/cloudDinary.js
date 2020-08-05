const dotenv = require('dotenv')
const cloudinary = require('cloudinary').v2
dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET
})

exports.upload = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, {
                folder: 'single'
            })
            .then(result => {
                if (result) {
                    const fs = require('fs')
                    fs.unlinkSync(file)
                    resolve({
                        url: result.url,
                        photoId:result.public_id,
                        width:result.width,
                        height:result.height
                    })
                }
            })
    })
}