import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countryDetails } from '../../databaseTmp'
import reduxStore from '../../lib/redux/reduxstore'
import { resetSearch, setSearchInput, setSearchResult } from '../../lib/redux/searchBarSlice'
import Pagenation from '../Pagenation/Pagenation'
import AddNewItem from '../AddNewItem/AddNewItem'
const AllCountries = () => {
    const dispatch = useDispatch()
    const [displayAddNewItem, setdisplayAddNewItem] = useState<boolean>(false)
    const sharedData = useSelector((store: ReturnType<typeof reduxStore.getState>) => {
        return store
    })
    useEffect(() => {
        dispatch(resetSearch())
    }, [])
    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchInput(e.target.value.toLowerCase()))
        const countryScope: countryDetails[] = sharedData.countriesData.allCountries
        dispatch(setSearchResult({
            countryScope,
            isCountry: true
        }))
    }
    return (
        <>
        {displayAddNewItem && <AddNewItem setdisplayAddNewItem={setdisplayAddNewItem} /> }
        <div className='py-1 right-to-left'>
            <div className='flex md:justify-end justify-center items-center flex-col md:items-start py-5 md:px-20'>
                <div className='w-full flex flex-col md:flex-row justify-center items-center md:justify-between py-5'>
                    <h2 className='font-bold'>الدول والمناطق المضافة</h2>
                    <button onClick={()=>setdisplayAddNewItem(true)} className='bg-violet-700 text-white px-3 py-2 rounded-xl font-semibold hover:shadow-inner hover:bg-violet-900 duration-300'>اضافة دولة جديدة</button>
                </div>
                <div className='border-2 w-fit rounded-md px-1 border-gray-300'>
                    <i className='fa-solid fa-magnifying-glass  text-lg h-full text-black ps-2'></i>
                    <input type="text" className='text-black py-3 text-start text-lg focus-visible:border-0 placeholder:text-black  outline-none focus:border-0 ps-2 h-full' placeholder="البحث" value={sharedData.searchBarSlice.searchInput} onChange={handleSearchInput} />
                </div>
            </div>
            {sharedData.searchBarSlice.searchResult ? <Pagenation isCountry={true} allData={sharedData.searchBarSlice.searchResult} countPerPage={20} />
            :
            <Pagenation isCountry={true} allData={sharedData.countriesData.allCountries} countPerPage={20} />}
        </div>
        </>
    )
}
export default AllCountries