module.exports = {

    port: process.env.Port || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/test',

    urlParser : {

        useNewUrlParser: true,
        useCreateIndex: true ,
        useUnifiedTopology: true,
        useFindAndModify: false ,
    }


};