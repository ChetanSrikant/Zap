const mongoose = require('mongoose');
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoekn')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required : true,
            minlength:[3,'First name must be atleast 3 charachters long']
        },

        lastname:{
            type: String,
            // required : true,
            minlength:[3,'Last name must be atleast 3 charachters long']
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,'Email must be atleast 3 charachters long']
        },
        password:{
            type: String,
            required: true,
            select:false,
            // minlength: [5,'Password must be atleast 3 charachters long']
        },
        socketId:{
            type: String,
        },                
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user' , userSchema);

module.exports = userModel;