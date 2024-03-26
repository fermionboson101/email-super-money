const putLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key, defaultval) => {
    const value = localStorage.valueOf()[key];
    return typeof value == 'undefined' ? defaultval : value;
}

export const saveLocalKeyVal = (key, emailId) => {
    const currentFavs = JSON.parse(getLocalStorage(key, '[]'));
    if (currentFavs.indexOf(emailId) != -1) return;
    putLocalStorage(key, [...currentFavs, emailId]);
}

export const removeLocalKeyVal = (key, emailId) => {
    const currentFavs = JSON.parse(getLocalStorage(key, '[]'));
    const favIndex = currentFavs.indexOf(emailId);
    if (favIndex === -1) return;
    currentFavs.splice(favIndex, 1);
    putLocalStorage(key, [...currentFavs]);
}

export const checkIsEmailIdContainsWithKey = (key, emailId) => {
    const currentFavs = JSON.parse(getLocalStorage(key, '[]'));
    return currentFavs.indexOf(emailId) !== -1;
}
