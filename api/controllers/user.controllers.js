import User from "../models/user.model.js";
export const deleteuser = async (req, res) => {
    try {
        const userfind = await User.findById(req.params.id)
        if (!userfind) return res.status(400).send("user not found !")
        if (userfind._id.toString() !== req.userId) {
            return res.status(403).send("please delete only your account !")
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("user deleted !")
    } catch (error) {
        res.status(500).send(error)
    }
};