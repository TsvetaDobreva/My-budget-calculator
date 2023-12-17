import { api } from "./requester";

const endPoint = {
    users: 'users/',
}

async function login(email, password) {
    return await api.post('login', { email, password });
}

async function register(username, email, password) {
    return await api.post('users', { username, email, password });
}

async function logout() {
    return await api.post('logout', {});
}

async function updateUser(data) {
    const id = localStorage.getItem('objectId');
    return await api.put(`${endPoint.users}/${id}`, data);
}

async function getUser() {
    const id = localStorage.getItem('objectId');
    const data = await api.get(`users/${id}`);
    return mapUserInfo(data);
}

function mapUserInfo(userInfo) {
    return {
        img: userInfo.img || '',
        username: userInfo.username || '',
        phone: userInfo.phone || '',
        birthday: userInfo.birthday || '',
        address: userInfo.address || '',
        email: userInfo.email || ''
    }
}

export const userService = {
    login,
    register,
    logout,
    updateUser,
    getUser
};