export function validateRegister (registerInfo) {
    const errors = {};

    if (registerInfo.username.length < 3) {
        errors.username = 'Username should be at least 3 characters long!';
    };

    if (registerInfo.email.length < 5) {
        errors.email = 'Email should be valid!';
    };

    if (registerInfo.password.length < 4) {
        errors.password = 'Password should be at least 4 characters long!';
    };

    if (registerInfo.rePassword != registerInfo.password) {
        errors.rePassword = 'Passwords should match!';
    };

    if (Object.keys(errors).length > 0) {
        throw errors;
    };
}
