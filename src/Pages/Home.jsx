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

    <section className="w-full mt-20 flex flex-col items-center justify-center">
            {items.map((item, index) => (
                <div
                key={index}
                >
                    <div className="w-full">
                        <img src={item.image} className="w-16 rounded-full"/>
                    </div>

                    <h1>
                        {item.name}
                    </h1>

                    <p>
                        Gender: {item.gender}
                    </p>

                    <p>
                        Kill counts: {item.ki}
                    </p>
                </div>
            ))}
    </section>
        </div>
    )
};
