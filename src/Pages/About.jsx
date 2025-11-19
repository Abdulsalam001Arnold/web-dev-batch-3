
import { useNavigate } from "react-router-dom"
import { userAuthStore } from "../store/authStore"
export default function About() {
    const navigate = useNavigate()
    const {user} = userAuthStore()
    const handlePress = () => {
        navigate('/')
    }
    return(
        <div>
        <h1>
            About page!
        </h1>

        <h3>
            {user.email}
        </h3>

        <button onClick={handlePress}>
            Navigate programatically!
        </button>

        </div>
    )
};
