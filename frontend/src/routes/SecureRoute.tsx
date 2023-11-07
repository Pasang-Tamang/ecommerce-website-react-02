import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const SecureRoute = () => {
    const isLoggedIn  = useSelector((state:any) => (state.auth.isLoggedIn))
    console.log(isLoggedIn)
  return (
    <div>
      
      {
        isLoggedIn ? <Outlet/> : <Navigate to="/"/>
      }
    </div>
  )
}

export default SecureRoute
