import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { countryDetails, regionDetails } from "../../databaseTmp";
interface PayloadInterface {
    countryScope?: countryDetails[],
    regionScope?: regionDetails[],
    isCountry: boolean
}
const initialState: { searchInput: string, searchResult: countryDetails[] | null | regionDetails[] } = {
    searchInput: '',
    searchResult: null
}
const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setSearchInput: (state, { payload }) => {
            state.searchInput = payload
            console.log('search input ', state.searchInput);

        },
        setSearchResult: (state, { payload }: PayloadAction<PayloadInterface>) => {
            // console.log('payload true ', payload.isCountry )
            if (payload.isCountry) {
                state.searchResult = payload.countryScope!.filter((country) => {
                    return (country.englishName.toLowerCase().includes(state.searchInput) || country.arabicName.toLowerCase().includes(state.searchInput))
                })
            } else {
                console.log(payload.regionScope);
                state.searchResult = payload.regionScope!.filter((data) => {
                    return (data.englishName.toLowerCase().includes(state.searchInput) || data.arabicName.toLowerCase().includes(state.searchInput))
                })
            }
        },
        resetSearch : ((state)=>{
            state.searchInput = ''
            state.searchResult = null
        })
    }
})
export default searchBarSlice.reducer
export const { setSearchInput, setSearchResult, resetSearch } = searchBarSlice.actions