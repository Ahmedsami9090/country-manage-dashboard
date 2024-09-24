import { useEffect, useState } from 'react'
import PagenationBottons from '../PagenatonBottons/PagenationBottons'
import PagenationData from '../PagenationData/PagenationData'
import { countryDetails, regionDetails } from '../../databaseTmp'
interface PagenationProps {
    allData: countryDetails[] | regionDetails[],
    isCountry: boolean
    countPerPage: number
}
const Pagenation = (props: PagenationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    let lastIndex = currentPage * props.countPerPage
    let firstIndex = lastIndex - props.countPerPage
    useEffect(()=>{
        lastIndex = currentPage * props.countPerPage
        firstIndex = lastIndex - props.countPerPage
    },[])
    return (
        <>
        <PagenationData isCountry={props.isCountry} allData={props.allData} firstIndex={firstIndex} lastIndex={lastIndex} />
        <PagenationBottons allData={props.allData} countPerPage={props.countPerPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}
export default Pagenation