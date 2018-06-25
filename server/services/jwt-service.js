import jwt from 'jsonwebtoken';
import config from 'config';

export default {
    async genToken(data) {
        return await jwt.sign(data, config.get('JWT_SECRET'))
    },
    async verify(token) {
        return await jwt.verify(token, config.get('JWT_SECRET'))
    }
}