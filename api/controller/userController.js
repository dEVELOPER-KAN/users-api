const users = require('../models/userModel')
exports.getUsers = async (req, res, next) => {
    const data = await users.find();
    res.status(200).json({
        message: "success",
        data
    })
}

exports.addUsers = async (req, res, next) => {

    let { name, image } = req.body;
    const USER = new users({
        name, image
    });
    const data = await USER.save();
    res.status(200).json({
        message: "success",
        data
    })
}

exports.deleteUsers = async (req, res, next) => {

    const data = await users.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message: "record deleted successfully"
    })
}

exports.updateUsers = async (req, res, next) => {

    const data = await users.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
        message: "record updated",
    })
}