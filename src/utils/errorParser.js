export function errorParser(err) {
    let errors = {};

    return {...errors, ...err}
}