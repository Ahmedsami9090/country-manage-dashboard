import { configureStore } from "@reduxjs/toolkit";
import countriesData from './allCountriesSlice';
import searchBarSlice from "./searchBarSlice";
const reduxStore = configureStore({
    reducer:{
        countriesData,
        searchBarSlice,
    }
})
export default reduxStore