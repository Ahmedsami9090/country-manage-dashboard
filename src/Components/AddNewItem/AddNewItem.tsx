import { SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCountry } from '../../lib/redux/allCountriesSlice'
interface AddNewItemInterface {
    setdisplayAddNewItem : React.Dispatch<SetStateAction<boolean>>
}
const AddNewItem = (props : AddNewItemInterface) => {
    const dispatch = useDispatch()
    const [arabicName, setarabicName] = useState<string>('')
    const [englisgName, setenglisgName] = useState<string>('')
    const [isActive, setisActive] = useState<boolean>(false)
    const handleArbName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setarabicName(e.currentTarget.value)
    }
    const handleEngName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setenglisgName(e.currentTarget.value)
    }
    const handleCountryStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == 'نشط') {
            setisActive(true)
        }
        else if (e.currentTarget.value == 'غير نشط') {
            setisActive(false)
        }
        else {
            setisActive(false)
        }
    }
    const handleAddition = ()=>{
        props.setdisplayAddNewItem(false)
        dispatch(addNewCountry({arabicName: arabicName, englishName : englisgName, id: '55', isActive: isActive}))
    }
    return (
        <div className='w-screen h-screen z-50 fixed bg-violet-400 bg-opacity-50 flex justify-center items-center'>
            <div className='w-full md:w-1/4 bg-white py-10 rounded-md  right-to-left'>
                <div className='text-center' >
                    <h1 className='font-semibold text-2xl'>اضافة دولة</h1>
                    <h2 className='text-sm mt-1'>يرجى ادخال المعلومات المطلوبة لاضافتها</h2>
                </div>
                <div className='w-full mt-5'>
                    <div className='flex flex-col items-start px-2 w-full'>
                        <label className='font-semibold' htmlFor="arabicName">اسم الدولة باللغة العربية</label>
                        <input type="text" value={arabicName} onChange={handleArbName} className='px-2 py-1 border-2 rounded-md text-black w-full' name="" id="arabicName" />
                    </div>
                    <div className='flex flex-col items-start px-2 '>
                        <label className='font-semibold' htmlFor="engName">اسم الدولة باللغة الانجليزية</label>
                        <input type="text" value={englisgName} onChange={handleEngName} className='px-2 py-1 border-2 rounded-md text-black w-full' name="" id="engName" />
                    </div>
                    <div className='flex flex-col  items-start px-2'>
                        <label className='font-semibold' htmlFor="isActive">حالة الدولة</label>
                        <datalist className="bg-white text-red-400" id="countryStatus">
                            <option value='نشط'></option>
                            <option value="غير نشط"></option>
                        </datalist>
                        <input list="countryStatus" type="text" onChange={handleCountryStatus}  className='px-2 py-1 border-2 rounded-md text-black w-full' name="" id="isActive" />
                    </div>
                    <div className="flex justify-center items-center w-full mt-10">
                        <button onClick={handleAddition} className="bg-violet-700 font-semibold text-white px-2 py-1 rounded-md shadow-md hover:bg-violet-900 duration-300" >حفظ التغيرات</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddNewItem