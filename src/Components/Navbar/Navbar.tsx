import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import reduxStore from '../../lib/redux/reduxstore'
import { setSelectedCountry } from '../../lib/redux/allCountriesSlice'
const Navbar = () => {
  const { clickedCountry } = useSelector((store: ReturnType<typeof reduxStore.getState>) => {
    return store.countriesData
  })
  const dispatch = useDispatch()
  return (
    <>
      <div className='flex flex-col md:flex-row justify-start px-5 md:px-14 pt-10 right-to-left'>
      <Link to=''>
          <i onClick={()=>dispatch(setSelectedCountry(''))} className='fa-solid fa-house'></i>
        </Link>
        <Link to=''>
          <h3 onClick={()=>dispatch(setSelectedCountry(''))} className='text-teal-600 font-semibold'><i className='fa-solid fa-chevron-left ms-2 text-black'></i> الدول و المناطق</h3>
        </Link>
        <h3 className='text-teal-600 font-semibold'><i className='fa-solid fa-chevron-left ms-2 text-black'></i> {clickedCountry}</h3>
      </div>
    </>
  )
}
export default Navbar