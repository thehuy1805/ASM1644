const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"
const url = "mongodb+srv://TheHuy:eqpd9StGeQbtt6nH@cluster0.hh3hohd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./product.model');
require('./orders.model');