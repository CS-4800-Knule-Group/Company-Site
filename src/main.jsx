
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Records from './Pages/Records.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
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
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    }
    
  ]
  
}])
createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router}/>
)
