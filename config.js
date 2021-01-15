module.exports = {

    port: process.env.Port || 8080,
    db: process.env.MONGODB || 'mongodb+srv://Admin:luis@cluster0.icyrg.mongodb.net/test?retryWrites=true&w=majority',

    urlParser : {

        useNewUrlParser: true,
        useCreateIndex: true ,
        useUnifiedTopology: true,
        useFindAndModify: false ,
    }


};