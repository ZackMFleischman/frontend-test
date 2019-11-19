const combineClasses = (classNameArray) => {
    return classNameArray
        .filter(className => className !== undefined && className !== '')
        .join(' ');
};

export default combineClasses;