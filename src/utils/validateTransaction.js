export function validateTransaction(transactionInfo) {
    const errors = {};

    if (transactionInfo.description.length < 3) {
        errors.description = 'Description should be at least 3 characters long!';
    };

    if (typeof(transactionInfo.amount) !== 'number') {
        errors.amount = 'Amount should be a number!';
    };

    if (Object.keys(errors).length > 0) {
        throw errors;
    };
};