import { api } from "./requester";

const id = localStorage.getItem('objectId');

async function addCard(card) {
    card.ownerId = {
        __type: 'Pointer',
        className: '_User',
        objectId: id
    };

    return await api.post('classes/Cards', card);
}

async function getCards() {
    const data = await api.get(`classes/Cards`);
    return data;
}

async function deleteCard(id) {
    return await api.del(`classes/Cards/${id}`);
}

async function getSingleCard(id) {
    return await api.get(`classes/Cards/${id}`);
}

async function updateCardBalance(id, amount, operationType) {
    const card = await getSingleCard(id);
    let currentBalance = card.balance;

    switch (operationType) {
        case 'income': currentBalance += Number(amount); break;
        case 'outgoing': currentBalance -= Number(amount); break;
    }

    return await api.put(`classes/Cards/${id}`, { balance: currentBalance })
}

export const dataService = {
    addCard,
    getCards,
    deleteCard,
    updateCardBalance
}