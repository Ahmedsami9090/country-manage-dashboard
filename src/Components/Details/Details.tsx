import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import reduxStore from '../../lib/redux/reduxstore'
import { useEffect } from 'react'
import { resetSearch } from '../../lib/redux/searchBarSlice'
const Details = () => {
  const sharedData = useSelector((state: ReturnType<typeof reduxStore.getState>) => {
    return state.countriesData
  })
  const param = useParams()
  const dispatch = useDispatch()
  console.log(param);
  const countryDashboard = sharedData.allCountries.find((data) => {
    return data.id == param.id
  })
  console.log(countryDashboard);
  useEffect(()=>{
    dispatch(resetSearch())
},[])
  return (
    <>
      <nav className='md:px-14 flex items-center md:justify-end justify-evenly'>
        <div className='w-full text-end border-b-2 pb-1'>
          <NavLink className='ms-3 font-semibold' to='country'>
            معلومات الدولة
          </NavLink>
          <NavLink className='font-semibold' to='regions'>
            المناطق
          </NavLink>
        </div>
      </nav>
      <Outlet context={{countryDashboard}} />
    </>
  )
}
export default Details