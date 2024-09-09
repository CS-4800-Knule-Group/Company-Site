import { Link } from "react-router-dom"

function App() {
  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={'/Records'}>Records</Link>
    </div>
  )
}

export default App
