const User = require('../models/users')




const registerNewUser=(req, res) => {
    User.create(req.body)
    res.send("Congrats!,New User has been added ");

}
    const loginUser=(req, res) => {
        res.send("Successful Login");
    }
    module.exports={registerNewUser,loginUser}