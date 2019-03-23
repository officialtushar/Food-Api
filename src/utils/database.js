var mongoose = require('mongoose');

let DB;

const connection = () => {
    const url = "mongodb+srv://techbun:techbun@apkacompany-inq9r.mongodb.net/test?retryWrites=true";
    mongoose.connect(url, {useNewUrlParser:true})
    .then((client) => {
        if(client) {
            // DB = client.db();
            console.log('Mongodb connected')
        }
    })
    .catch()
}

const getDb = () => {
    if(DB) {
        return DB;
    }
}

exports.connect = connection;
exports.getDb = getDb;
