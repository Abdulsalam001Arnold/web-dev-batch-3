import Button from "../components/button";
import CounterBtn from "../components/CounterBtn";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dragonball-api.com/api/characters')

            const data = await response.json()

            console.log(data)
            setItems(data.items)
        }

        fetchData()
    }, [])
    return(
        <div>
    <div>
    <h1>Hello Vite + React!</h1>
    <ul>
      <li>ijioroijbr</li>
    </ul>

    <Button name='Lanre'/>

    <CounterBtn/>
    </div>

    <Link to={'/about'}>
        Go to About Page
    </Link>
        </div>
    )
};
