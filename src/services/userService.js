import { api } from "./requester";

const endPoint = {
    users: 'users/',
}

async function login(email, password) {
    const data = await api.post('login', { email, password });
    sessionStorage.setItem('userData', JSON.stringify(data));
    return data;
}

async function register(username, email, password) {

    const data = await api.post('users', { username, email, password }); 
    sessionStorage.setItem('userData', JSON.stringify(data));
    return data;
}

async function updateUser(data) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const id = userData.objectId;
    return await api.put(`${endPoint.users}/${id}`, data);
}

async function getUser() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const id = userData.objectId;
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
    }
}

export const userService = { login, register, updateUser, getUser };