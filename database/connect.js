const mongoose = require('mongoose');



//If you are using version 6 of mongoose then there is no need for this to be done
const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }).then(() => console.log('We have connected to the db')).catch(
        (err) => console.log(err)
    )
}

module.exports = connectDB