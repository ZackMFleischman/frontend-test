export const getQueryParameters = queryParamObject => {
    return Object.entries(queryParamObject)
        .reduce((queryParamString, [key, value], index) => {
            return `${queryParamString}${index ? '&' : '?'}${key}=${value}`;
        }, '');
};