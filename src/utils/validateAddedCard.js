export function validateAddedCard(cardInfo) {
    const errors = {};

    if (cardInfo.bankName.length < 3) {
        errors.bankName = 'Bank name should be at least 3 characters long!';
    }

    if (cardInfo.cardNumber.length < 16) {
        errors.cardNumber = 'Not correct card number!';
    }

    if (cardInfo.validDate.length < 7) {
        errors.validDate = 'Not correct card valid date!';
    }

    if (cardInfo.ownerName.length < 3) {
        errors.ownerName = 'Owner name should be at least 3 characters long!';
    }

    if (typeof (cardInfo.balance) !== 'number') {
        errors.balance = 'Balance should be a number!';
    }

    if (cardInfo.cardType.length < 4) {
        errors.cardType = 'Card type should be at least 4 characters locardType';
    }

    if (Object.keys(errors).length > 0) {
        throw errors;
    }
};
