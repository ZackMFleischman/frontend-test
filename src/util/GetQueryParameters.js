export const getQueryParameters = (queryParamObject = {}) => {
    const entries = Object.entries(queryParamObject)
        .filter(([key, value]) => value !== undefined);

    return entries.reduce((queryParamString, [key, value], index) => {
        if (value === undefined) return queryParamString;
        const spaceEscapedValue = value.replace(/\s/g, '%20'); // Replace spaces with '%20'
        return `${queryParamString}${index ? '&' : '?'}${key}=${spaceEscapedValue}`;
    }, '');
};