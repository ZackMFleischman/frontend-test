export const getQueryParameters = (queryParamObject = {}) => {
    return Object.entries(queryParamObject).reduce((queryParamString, [key, value], index) => {
        const spaceEscapedValue = value.replace(/\s/g, '%20'); // Replace spaces with '%20'
        return `${queryParamString}${index ? '&' : '?'}${key}=${spaceEscapedValue}`;
    }, '');
};