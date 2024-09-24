import { useDispatch, useSelector } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { countryDetails } from '../../databaseTmp'
import reduxStore from '../../lib/redux/reduxstore'
import { setSearchInput, setSearchResult } from '../../lib/redux/searchBarSlice'
import Pagenation from '../Pagenation/Pagenation'
interface OutletContextType {
  countryDashboard: countryDetails
}
const RegionDetails = () => {
  const { countryDashboard } = useOutletContext<OutletContextType>()
  const sharedData = useSelector((state: ReturnType<typeof reduxStore.getState>) => {
    return state
  })
  const dispatch = useDispatch()
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInput(e.target.value.toLowerCase()))
    dispatch(setSearchResult({ regionScope: countryDashboard.regions, isCountry: false }))
  }
  if (!countryDashboard.regions) {
    return (
      <div className='w-full flex justify-center items-center py-10'>
        <h1 className='font-semibold text-violet-600 text-2xl'>لا يوجد مناطق مدخلة</h1>
      </div>
    )
  } else {
    return (
      <>
        <div className='px-14 mt-5'>
          <div className="relative rounded-md  right-to-left">
            <div className='border-2 w-fit rounded-md ps-2 border-gray-300 right-to-left'>
              <i className='fa-solid fa-magnifying-glass text-lg h-full text-black pe-2'></i>
              <input type="text" className='text-black py-2 text-lg focus-visible:border-0 placeholder:text-black outline-none focus:border-0 h-full'
                placeholder="البحث" value={sharedData.searchBarSlice.searchInput} onChange={handleSearchBar} />
            </div>
            <table className="w-full text-sm text-gray-500 mt-3 shadow-lg rounded-md">
              <thead className="text-xs text-gray-700  rounded-md border-b-2 ">
                <tr className=''>
                  <th scope="col" className=" text-start ps-10 py-3">
                    الاسم باللغة العربية
                  </th>
                  <th scope="col" className="text-start ps-10 py-3">
                    الاسم باللغة الانجليزية
                  </th>
                  <th scope="col" className="text-start ps-10 py-3">
                    حالة المنطقة
                  </th>
                  <th scope="col" className="text-start ps-10 py-3 rounded-tl-lg">
                    <span className="">الاعدادات</span>
                  </th>
                </tr>
              </thead>
              {sharedData.searchBarSlice.searchResult ?
                <Pagenation allData={sharedData.searchBarSlice.searchResult} isCountry={false} countPerPage={2} />
                :
                <Pagenation allData={countryDashboard.regions!} isCountry={false} countPerPage={2} />}
            </table>
          </div>
        </div>
      </>
    )
  }
}
export default RegionDetails