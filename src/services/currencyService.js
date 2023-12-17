// const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn/eur.json';

const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

async function getCurrency() {
    const eur = await getEur();
    const usd = await getUsd();
    const gbp = await getGbp();
    const tr = await getTry();

    return { eur, usd, gbp, tr };
}

async function getEur() {
    const euroToBgnRequest = await fetch(`${baseUrl}/eur/bgn.json`);
    const euroToBgn = await euroToBgnRequest.json();
    return euroToBgn;
}

async function getUsd() {
    const usdToBgnRequest = await fetch(`${baseUrl}/usd/bgn.json`);
    const usdToBgn = await usdToBgnRequest.json();
    return usdToBgn
}

async function getGbp() {
    const gbpToBgnRequest = await fetch(`${baseUrl}/gbp/bgn.json`);
    const gbpToBgn = await gbpToBgnRequest.json();
    return gbpToBgn;
}

async function getTry() {
    const tryToBgnRequest = await fetch(`${baseUrl}/try/bgn.json`);
    const tryToBgn = await tryToBgnRequest.json();
    return tryToBgn;
}

export const currencyService = {
    getCurrency
}