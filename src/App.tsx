import './App.css'
import AllCountries from './Components/AllCountries/AllCountries'
import { Provider } from 'react-redux'
import reduxStore from './lib/redux/reduxstore'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './Components/Details/Details'
import RegionDetails from './Components/RegionDetails/RegionDetails'
import Layout from './Components/Layout/Layout'
import CountryDetails from './Components/CounrtyDetails/CountryDetails'
function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        {path: '', element: <AllCountries/>},
        { path: 'details/:id', element: <Details />, children:[
          {path: 'country', element: <CountryDetails/>},
          {path: 'regions', element: <RegionDetails/>}
        ] },
      ]
    }
  ])
  return (
    <>
      <Provider store={reduxStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
export default App
