import { Route,Navigate} from 'react-router-dom'

const PrivateRoute=({children,isAuthanticated,...rest})=>{
    return (
        <Route 
        {...rest}
        element={isAuthanticated?children:<Navigate to="/login" replace />}
        />    )
}

export default PrivateRoute