import localStorageKey from "../utils/localStorageKey";

const localStorageMiddleware = state => next => action => {
    const { favourites } = state.getState().favourite;
    if (action.type === 'favourite/addToFavourite') {
        localStorage.setItem(localStorageKey('favourite'), JSON.stringify([...favourites, action.payload]))
    } else if (action.type === 'favourite/deleteFromFavourite') {
        localStorage.setItem(localStorageKey('favourite'), JSON.stringify(favourites.filter((k) => k !== action.payload)))
    }
    next(action);
}

export default localStorageMiddleware