const dotenv =require('dotenv')
dotenv.config();

exports.urlMongo = `mongodb+srv://${process.env.DATA_NAME}:${process.env.DATA_PASSWORD}@cluster0-x93gd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
exports.options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };