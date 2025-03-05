const User = require('../model/User');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message' : 'No users found.' });
    res.json(users);
}

const updateUser = async (req , res) => {
    if(!req?.body?.id) {
        return res.status(400).json({ 'message' : `ID parameter is required.`});
    }

    const user = await User.findOne({ _id : req.body.id}).exec(); 
    if(!user) {
        return res.status(204).json({ 'message' : `No user matches ID ${req.body.id}.` });
    }

    if(req.body.username) user.username = req.body.username;
    if(req.body.roles) user.roles = req.body.roles;

    if(req.body.password) {
        try {
            // encrypt the password
            const hashedPwd = await bcrypt.hash(req.body.password , 10); // 10 is used as a salt here
            //create and store the new user
            user.password = hashedPwd;
        } catch(err) {
            return res.status(500).json({ 'message' : err.message });
        }
    }

    // save the udpated employee in db
    const result = await user.save();
    res.json(result);
}

const deleteUser = async (req, res) => {
    if(!req?.body?.id) {
        return res.status(400).json({ 'message' : `ID parameter is required.`});
    }
    
    const user = await User.findOne({ _id : req.body.id }).exec(); 
    if(!user) {
        return res.status(204).json({ 'message' : `No employee matches ID ${req.body.id}.` });
    }

    const result = await User.deleteOne({ _id : req.body.id });
    res.json(result);
}

const getUserById = async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({ 'message' : `User ID is required.`});
    
    const user = await User.findOne({ _id : req.params.id }).exec(); 
    if(!user) {
        return res.status(204).json({ 'message' : `No user matches ID ${req.params.id}.` });
    }
    res.json(user);
};

module.exports = { getAllUsers, updateUser, deleteUser, getUserById }

