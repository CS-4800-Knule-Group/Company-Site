
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Records from './assets/Pages/Records.jsx'

const Layout = () => {
  return (
    <div>
      <header>Header here</header>
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
