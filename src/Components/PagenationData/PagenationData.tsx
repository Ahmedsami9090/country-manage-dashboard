import { countryDetails, regionDetails } from '../../databaseTmp'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedCountry } from '../../lib/redux/allCountriesSlice'
interface PagenationDataProps {
  allData: countryDetails[] | regionDetails[]
  firstIndex: number
  lastIndex: number
  isCountry: boolean
}
const PagenationData = (props: PagenationDataProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const displayDetails = (id: string) => {
    const clickedCountry = props.allData!.find((data) => {
      return data.id == id
    })
    dispatch(setSelectedCountry(clickedCountry?.arabicName))
    navigate(`/details/${id}/country`)
  }
  const dataPerPage = props.allData.slice(props.firstIndex, props.lastIndex)
  if (props.isCountry) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-2 gap-y-3 px-5 md:px-20'>
        {dataPerPage.map((data) => <div key={data.id} onClick={() => displayDetails(data.id)} className='border-2 rounded-md px-3 py-10 flex flex-col space-y-4 items-start hover:bg-gray-200 cursor-pointer'>
          <h3 className={`${data.isActive ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} font-bold w-fit px-2 py-1 rounded-md`}>{data.isActive ? 'نشط' : 'غير نشط'}</h3>
          <h3 className='font-bold'>{data.englishName}</h3>
          <h3 className='font-semibold'>{data.arabicName}</h3>
        </div>)}
      </div>
    )
  } else {
    return (
      <tbody>
        {dataPerPage.map((data) => <tr key={data.id} className="bg-white rounded-md">
          <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap text-start ps-14">
            {data.arabicName}
          </th>
          <td className=" py-4  text-start ps-14">
            {data.englishName}
          </td>
          <td className=' py-4 text-start ps-14 '>
            <h3 className={` w-fit  font-semibold p-1 rounded-md  ${data.isActive ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
              {data.isActive ? 'فعال' : "غير فعال"}
            </h3>
          </td>
          <td className=" py-4 text-start ps-14">
            <a href="#" className="font-medium text-blue-600"><i className="fa-solid fa-ellipsis-vertical"></i></a>
          </td>
        </tr>)}
      </tbody>
    )
  }
}
export default PagenationData