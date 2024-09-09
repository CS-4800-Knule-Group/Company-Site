
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Records from './Pages/Records.jsx'
import Header from './Components/Header.jsx'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}


const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[
    {
      path: '/',
      element: <App />,
    },
    {
      path: "/records",
      element: <Records/>,
    }
  ]
  
}])
createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)
