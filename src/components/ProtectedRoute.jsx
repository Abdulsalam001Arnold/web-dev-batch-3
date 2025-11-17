
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { userAuthStore } from "../store/authStore";


export default function ProtectedRoute({children}) {
    const { checkAuth, authorized } = userAuthStore()

    useEffect(() => {
        if(authorized === null) {
            checkAuth()
        }
    }, [authorized])

    if(authorized === null) {
        return <div>Loading........</div>
    }

    if(authorized === false) {
        return <Navigate to={'/login'} replace/>
    }

    return children;
};

