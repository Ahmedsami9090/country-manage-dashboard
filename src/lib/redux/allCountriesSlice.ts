import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import countries, { regionDetails } from "../../databaseTmp";
import { countryDetails } from "../../databaseTmp";

const initialState: { allCountries: countryDetails[], clickedCountry: string } = {
    allCountries: countries,
    clickedCountry: ''
}
interface PayloadInterface {
    countryId: string
    region: regionDetails
}
interface changeCountryArbNameInterface {
    newArbName: string
    countryId: string
}
interface changeCountryEngNameInterface {
    newEngName: string
    countryId: string
}
interface changeCountryStatusProps {
    countryId: string
    isActive: boolean
}
interface AddNewCountryInterface {
    payload : countryDetails
}
const countriesData = createSlice({
    name: 'allCountries',
    initialState,
    reducers: {
        changeCountryStatus: (state, { payload }: PayloadAction<changeCountryStatusProps>) => {
            state.allCountries.filter((country) => country.id == payload.countryId ? country.isActive = payload.isActive! : '')
        },
        changeArbName: (state, { payload }: PayloadAction<changeCountryArbNameInterface>) => {
            if(payload.newArbName != ''){
                state.allCountries.filter((country) => country.id == payload.countryId ? country.arabicName = payload.newArbName : '')
            }
        },
        changeEngName : (state, {payload} : PayloadAction<changeCountryEngNameInterface>)=>{
            if(payload.newEngName != ''){
                state.allCountries.filter((country) => country.id == payload.countryId ? country.englishName = payload.newEngName : '')
            }
        },
        addNewCountry: (state, { payload } : AddNewCountryInterface) => {
            state.allCountries.push(payload)
        },
        addNewRegion: (state, { payload }: PayloadAction<PayloadInterface>) => {
            state.allCountries.map((country) => {
                if (country.id == payload.countryId) {
                    country.regions!.push(payload.region)
                }
            })
        },
        setSelectedCountry: (state, { payload }) => {
            state.clickedCountry = payload
        }
    },
})
export default countriesData.reducer
export const { changeCountryStatus, addNewCountry, addNewRegion, setSelectedCountry, changeArbName, changeEngName } = countriesData.actions