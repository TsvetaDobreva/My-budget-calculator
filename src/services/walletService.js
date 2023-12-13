import { api } from "./requester";

const id = localStorage.getItem('objectId');

async function addTransaction(data, cardNumber) {
    data.ownerId = {
        __type: 'Pointer',
        className: '_User',
        objectId: id
    };
    data.cardNumber = cardNumber;

    return await api.post('classes/Wallet', data);
}

async function getTransaction() {
    return await api.get('classes/Wallet');
}

export const walletService = {
    addTransaction,
    getTransaction
}