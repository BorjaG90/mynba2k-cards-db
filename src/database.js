const mongoose = require("mongoose");

mongoose.connect('mongodb://user:mynba2k@ds125502.mlab.com:25502/mynba2k', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));