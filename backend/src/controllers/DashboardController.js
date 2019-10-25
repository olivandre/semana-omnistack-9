const User = require("../models/User")
const Spot = require("../models/Spot")

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(401).json({ error: 'User does not exists' });
        }

        const spots = Spot.find({user: user_id});

        return res.json(spots)
    }
};