import { api } from "./requester";

const userData = sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData'));
const id = userData.objectId

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

export const dataService = {
    addCard,
    getCards,
    deleteCard
}