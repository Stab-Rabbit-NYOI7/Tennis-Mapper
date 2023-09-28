import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favoritesSlice';
// import leastFavoritesReducer from './reducers/leastFavoritesSlice'
import mapReducer from './reducers/mapSlice';
import resultsReducer from './reducers/resultsSlice';
import authReducer from './reducers/authSlice'

export const store = configureStore({
  reducer: {
    map: mapReducer,
    favorites: favoritesReducer,
    // leastFavorites: leastFavoritesReducer,
    results: resultsReducer,
    authentication : authReducer,
  },
})