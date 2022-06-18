import { http } from './config';

export default {
    create: (user) => {
        return http.post('user', user);
    },
    read: () => {
        return http.get('user');
    },
    update: (user) => {
        return http.put('user/' + user.id, user);
    },
};
