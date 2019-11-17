const toAction = (type, payload) => {
    return {
        type,
        payload
    }
};

export const toActionError = (type, error) => {
    return {
        type,
        error
    }
};

export default toAction;