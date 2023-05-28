/* eslint-disable no-const-assign */
const isOccupiedName = (login) => {
    let isOccupied = false;
    let usersArr =[]
    if(localStorage.getItem('users') !== null) {
        usersArr = Array.from(JSON.parse(localStorage.getItem('users')));
    }
    usersArr.forEach(element => {
        if(element.userName === login) {
            isOccupied = true;
        }
    });
    return isOccupied;
}

export default isOccupiedName;