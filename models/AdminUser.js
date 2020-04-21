const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

AdminUserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

AdminUserSchema.set('toJSON', {
    virtuals: true
});

module.exports = AdminUser = mongoose.model("admin-users", AdminUserSchema);
