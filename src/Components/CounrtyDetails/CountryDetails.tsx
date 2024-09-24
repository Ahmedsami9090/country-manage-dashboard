import { useOutletContext } from "react-router-dom"
import { countryDetails } from "../../databaseTmp";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeArbName, changeCountryStatus, changeEngName } from "../../lib/redux/allCountriesSlice";
interface OutletContextType {
    countryDashboard : countryDetails
}
const CountryDetails = () => {
    const dispatch = useDispatch()
const {countryDashboard} = useOutletContext<OutletContextType>()
const [newStatus, setnewStatus] = useState<boolean>(countryDashboard.isActive)
const [newEngName, setnewEngName] = useState<string>('')
const [newArbName, setnewArbName] = useState<string>('')
const handleNewStatus = (e : React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.value);
    if(e.currentTarget.value == 'نشط'){
        setnewStatus(true)
    }
    else if(e.currentTarget.value == 'غير نشط'){
        setnewStatus(false)
    }
    else{
        setnewStatus(countryDashboard.isActive)
    }
}
const handleEngNameChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setnewEngName(e.currentTarget.value)
}
const handleNewArbName = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setnewArbName(e.currentTarget.value)
}
    const handleDetailsChange = ()=>{
        console.log(countryDashboard);
        dispatch(changeCountryStatus({countryId: countryDashboard.id, isActive : newStatus} ))
        dispatch(changeArbName({countryId: countryDashboard.id, newArbName: newArbName}))
        dispatch(changeEngName({countryId: countryDashboard.id, newEngName: newEngName}))
        console.log(countryDashboard);
    }
    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 px-14 py-5 rtl:md:grid-cols-3 right-to-left'>
                <div className='flex flex-col items-start px-2 '>
                    <label className='font-semibold' htmlFor="arabicName">اسم الدولة باللغة العربية</label>
                    <input type="text" readOnly value={countryDashboard.arabicName} className='px-2 py-1 border-2 rounded-md text-black w-full md:w-1/2' name="" id="arabicName" />
                </div>
                <div className='flex flex-col items-start px-2'>
                    <label className='font-semibold' htmlFor="arabicName">اسم حقل المنطقة باللغة العربية</label>
                    <input type="text" onChange={handleNewArbName} value={newArbName} className='px-2 py-1 border-2 rounded-md text-black w-full md:w-1/2' name="" id="arabicName" />
                </div>
                <div className='flex flex-col  items-start px-2'>
                    <label className='font-semibold' htmlFor="arabicName">حالة الدولة</label>
                    <datalist className="bg-white text-red-400" id="countryStatus">
                        <option value='نشط'></option>
                        <option value="غير نشط"></option>
                    </datalist>
                    <input list="countryStatus" onChange={handleNewStatus} type="text"  className='px-2 py-1 border-2 rounded-md text-black w-full md:w-1/2' name="" id="arabicName" />
                </div>
                <div className='flex flex-col items-start px-2'>
                    <label className='font-semibold' htmlFor="arabicName">اسم الدولة باللغة الانجليزية</label>
                    <input type="text" readOnly value={countryDashboard.englishName} className='px-2 py-1 border-2 rounded-md text-black w-full md:w-1/2' name="" id="arabicName" />
                </div>
                <div className='flex flex-col items-start px-2'>
                    <label className='font-semibold' htmlFor="arabicName">اسم حقل المنطقة باللغة الانجليزية</label>
                    <input type="text" onChange={handleEngNameChange} value={newEngName} className='px-2 py-1 border-2 rounded-md text-black w-full md:w-1/2' name="" id="arabicName" />
                </div>
                <div className="flex justify-center items-end w-full md:w-1/2">
                    <button className="bg-violet-700 font-semibold text-white px-2 py-1 rounded-md shadow-md hover:bg-violet-900 duration-300" onClick={handleDetailsChange} >حفظ التغيرات</button>
                </div>
            </div>
        </>
    )
}
export default CountryDetails