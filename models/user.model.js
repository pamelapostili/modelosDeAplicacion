const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    },
    profile: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;