import ReactPaginate from 'react-paginate'
import { countryDetails, regionDetails } from '../../databaseTmp';
interface PaginationBottonsProps {
    countPerPage: number,
    allData: countryDetails[] | regionDetails[]
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
const PagenationBottons = (props: PaginationBottonsProps) => {
    return (
        <div className=''>
            <ReactPaginate
                breakLabel="..."
                nextLabel={
                    <i className='fa-solid fa-chevron-left'></i>
                }
                pageRangeDisplayed={3}
                pageCount={Math.ceil(props.allData.length / props.countPerPage)}
                previousLabel={
                    <i className='fa-solid fa-chevron-right  me-1'></i>
                }
                containerClassName='flex justify-center items-center font-semibold mt-5 '
                pageClassName='p-2 w-8 h-8 flex justify-center items-center me-1'
                activeClassName='bg-teal-600 rounded-full text-white'
                onPageChange={(e) => {
                    props.setCurrentPage(e.selected + 1)
                }}
            />
        </div>
    )
}
export default PagenationBottons