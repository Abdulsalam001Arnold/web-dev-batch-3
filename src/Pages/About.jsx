
import { useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate()
    const handlePress = () => {
        navigate('/')
    }
    return(
        <div>
        <h1>
            About page!
        </h1>

        <button onClick={handlePress}>
            Navigate programatically!
        </button>

        </div>
    )
};
