const mongoose = require('mongoose');
const { Schema } = mongoose;

const drListSchema = new Schema({

        DrTeamList:[{ Name: String,
                Post: String,
                description:String,
                image:String
        }],

        title:String,
        description:String

});

exports.drList = mongoose.model('drList', drListSchema);
