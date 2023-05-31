export default function localStorageKey(key) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user?.userName) {
        return key + user.userName;
    }
    return '';
}