import jwt from 'jsonwebtoken';
import User from '../models/user';

const auth = async (resolve, parent, args, context, info) => {
    const req = context.request;
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'asecret');
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token
        })
        if (!user) {
            throw new Error("Unable to authenticate")
        }
        req.user = user
        req.token = token
        const result = await resolve(parent, args, context, info)
        return result
    } catch (e) {
        throw new Error("Unable to authenticate")
    }
};

export default auth;