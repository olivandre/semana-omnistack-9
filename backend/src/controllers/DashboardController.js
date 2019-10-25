const User = require("../models/User")
const Spot = require("../models/Spot")

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(401).json({ error: 'User does not exists' });
        }

        console.log(user)

        const spots = await Spot.find({user: user_id});

        return res.json(spots)
    }
};