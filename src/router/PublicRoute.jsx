import { Navigate } from "react-router-dom";

export const PublicRoute = ({children, uid}) => {
    console.log('sisisisisisiisisis', uid)
    return uid ? <Navigate to="/" /> : children
}
