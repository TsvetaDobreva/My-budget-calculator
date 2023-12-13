const baseUrl = "https://parseapi.back4app.com/"; 
const API_KEY = "1pIIE0mQe2tSElYbeEC8QZqLeyptBw85byGinVbU"; 
const APPLICATION_ID = "cT8qTlvtO5pMbIONFw3pTuNkTTnhoZvrfULAqD1X";

async function requester(url, method, data) {
    const option = {
        method,
        headers: { 
            "X-Parse-Application-Id": APPLICATION_ID, 
            "X-Parse-REST-API-Key": API_KEY 
        }
    }

    if(data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }
   
    const sessionToken = localStorage.getItem('sessionToken')
    if(sessionToken) {
       option.headers['X-Parse-Session-Token'] = sessionToken;
    }

    try {
        const response = await fetch(baseUrl + url, option);

        if(!response.ok) {      
            const message = await response.json();
            throw new Error(message);
        };

        if(response.status == 204) {
            return response;
        };

        return response.json();
    } catch (error) {
        throw error;
    }
}

async function get(url) {
    return requester(url, 'GET');
}

async function post(url, data) {
    return requester(url, 'POST', data);
}

async function put(url, data) {
    return requester(url, 'PUT', data);
}

async function del(url) {
    return requester(url, 'DELETE');
}

export const api = {
    get,
    post,
    put,
    del
}